import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowCircleLeft, ArrowCircleRight, PencilLine, Trash, Warning } from 'phosphor-react';

import { masks } from '../../utils';
import { deleteProduct } from '../../store/products';
import { getProducts } from '../../api';
import './styles.css'

export function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector(state => state.products);
  const productsCount = useSelector(state => state.productsCount);
  const [order, setOrder] = useState({page: 1, value:''});  
  
  useEffect(() => {
    dispatch(getProducts(order.page, order.value));
  }, [order]);
  
  function handleSelect({ target }) {
    setOrder(prevent => { return {...prevent, value: target.value}});
  }
  
  return (
    <div className="contain-products">
      <h1>Produtos</h1>
      <div className="contain-buttons">
        <Link to="/addProduct">
          <button>Cadastrar</button>
        </Link>
        <label>
          Filtrar por:
          <select name="filter" id="filter" value={order.value} onChange={handleSelect}>
            <option value="" disabled></option>
            <option value="name">Nome do produto</option>
            <option value="manufacturingDate">Data de fabricação</option>
            <option value="expirationDate">Data de validade</option>
            <option value="perishableProduct">Produto perecível</option>
          </select>
        </label>
      </div>
      <div className="contain-cards">
        {products.map(item => (
          <div key={item.id} className="card">
            <div className="item">
              <p><strong>Produto: {item.name}</strong></p>
              <p>Data de fabricação: {masks.date(item.manufacturingDate)}</p>
              {item.perishableProduct && <p>Data de validade: {masks.date(item.expirationDate)}</p>}
              <p>Preço: {masks.money(item.price)}</p>
              {item.perishableProduct && <p> <Warning size={20} color="#ebb800" weight="bold" /> Produto perecível</p>}
            </div>
            <div className="icons">

              <PencilLine
                className='icon'
                size={26} color="#04A0D9" weight="bold"
                onClick={e => navigate(`/addProduct#${item.id}`)}
              />
            
              <Trash
                className='icon' 
                size={26} color="#843453" weight="bold"
                onClick={() => dispatch(deleteProduct(item.id))} 
              />
            </div>
          </div>
        ))}
        <div className="icons arrows">
          {order.page <= 1 ?
            <ArrowCircleLeft size={40} color="#a1a5a75e" weight="bold" cursor="default" /> :
            <ArrowCircleLeft 
              size={40} color="#04a0d9" weight="bold" cursor="pointer" 
              onClick={ e => setOrder(prevent => {
                return {...prevent, page: order.page - 1}
              })}
            />
          }
          {order.page >= productsCount ?
            <ArrowCircleRight size={40} color="#a1a5a75e" weight="bold" /> :
            <ArrowCircleRight 
              size={40} color="#04a0d9" weight="bold" cursor="pointer" 
              onClick={ e => setOrder(prevent => { 
                return {...prevent, page: order.page + 1}
              })}
            />
          }
        </div>
      </div>
    </div>
  )
}

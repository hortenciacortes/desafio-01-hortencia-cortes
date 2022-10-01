import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PencilLine, Trash, Warning } from 'phosphor-react';

import { masks } from '../../utils';
import { deleteProduct } from '../../store/products';
import { getProducts } from '../../api';
import './styles.css'

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts())
  }, []);
  
  return (
    <div className="contain-products">
      <h1>Produtos</h1>
      <Link to="/addProduct">
        <button>Cadastrar</button>
      </Link>
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
      </div>
    </div>
  )
}

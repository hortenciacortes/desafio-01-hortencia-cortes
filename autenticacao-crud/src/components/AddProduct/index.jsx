import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { masks } from '../../utils';
import { addProduct, editProduct } from '../../store/products';
import './styles.css'
import { getProducts } from '../../api';

export function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);
  const initialState = {
    name: "",
    manufacturingDate: "",
    perishableProduct: true,
    expirationDate: "",
    price: ""
  }
  const [form, setForm] = useState(initialState);
  const idEdit = Number(document.location.hash.replace(/\D+/g, ""));

  {idEdit && 
    useEffect(() => {
      dispatch(getProducts());

      Object.keys(products).filter(key => products[key].id === idEdit && setForm(products[key]));
    }, []);
  }

  function handleAddProduct() {
    const manufacturingDate = new Date(form.manufacturingDate);
    const expirationDate = new Date(form.expirationDate);

    const filledFields =Object.keys(form).filter(key => {
      return form[key] !== '';
    });
    
    if(filledFields.length === Object.keys(form).length || (filledFields.length === Object.keys(form).length - 1 && !form.perishableProduct)) {
      if(manufacturingDate.getFullYear() > expirationDate.getFullYear() ||
        manufacturingDate.getMonth() + 1 > expirationDate.getMonth() + 1 ||
        (manufacturingDate.getMonth() + 1 === expirationDate.getMonth() + 1 &&
          manufacturingDate.getDate() + 1 > expirationDate.getDate() + 1)
      ){
        alert('A data de validade não pode ser menor do que a data de fabricação');
      } else {
        idEdit ? dispatch(editProduct(form)) : dispatch(addProduct(form))
        alert(idEdit ? 'Produto editado com sucesso' : 'Produto adicionado com sucesso');
        setForm(initialState);
        navigate('/products');
      }
    }else {
      alert('Preencha todos os campos para continuar');
    }
  }

  return (
    <div className="contain-newProducts">
      <h1>Adicionar Produtos</h1>
      <div className="contain-form">
        <label className="form-info">
          Produto:
          <input 
            type="text"
            value={form.name}
            onChange={e => setForm(prevent => {
              return {...prevent, name: e.target.value}
            })} 
          />
        </label>
        
        <label className="form-info">
          Data de fabricação:
          <input 
            type="date" 
            value={form.manufacturingDate}
            onChange={e => setForm(prevent => {
              return {...prevent, manufacturingDate: e.target.value}
            })} 
          />
        </label>

        <label className="form-info perishabl">
          Produto é perecível:
          <div>
            <label>
              <input 
                type="radio" 
                id="true" name="perishabl" value="true"
                checked={form.perishableProduct ? true : false}
                onChange={e => setForm(prevent => {
                  return {...prevent, perishableProduct: true}
                })}
              />
              Sim
            </label>
            <label>
              <input 
                type="radio" 
                id="false" name="perishabl" value="false"                
                checked={form.perishableProduct ? false : true}
                onChange={e => setForm(prevent => {
                  return {...prevent, perishableProduct: false, expirationDate: ''}
                })}
              />
              Não
            </label>
          </div>
        </label>

        {form.perishableProduct && <label className="form-info">
          Data de validade:
          <input 
            type="date" 
            value={form.expirationDate}
            onChange={e => setForm(prevent => {
              return {...prevent, expirationDate: e.target.value}
            })} 
          />
        </label>}

        <label className="form-info">
          Preço:
          <input 
            type="text" 
            value={masks.money(form.price)}
            onChange={e => setForm(prevent => {
              return {...prevent, price: e.target.value}
            })}
          />
        </label>
        
        <div className="buttons">
          <button onClick={e => navigate('/products')}>Voltar</button>
          <button onClick={handleAddProduct}>Adicionar</button>

        </div>
      </div>
    </div>
  )
}


import Nav from './Nav'

function Home({Toggle}) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1' >
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>132</h3>
                            <p className='fs-2'>Produtos</p>
                        </div>
                        <i className='bi bi-cart-plus p-3 fs-1'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1' >
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>45</h3>
                            <p className='fs-2'>Vendidos</p>
                        </div>
                        <i className='bi bi-currency-dollar p-3 fs-1'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1' >
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>40</h3>
                            <p className='fs-2'>Entregues</p>
                        </div>
                        <i className='bi bi-truck p-3 fs-1'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1' >
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>34</h3>
                            <p className='fs-2'>Em alta</p>
                        </div>
                        <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                    </div>
                </div>
                
            </div>
        </div>

        <table className='table caption-top bg-white roundead mt-2'>
            <caption className='text-white fs-4'>Recente</caption>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Distribuidor</th>
                    <th scope='col'>Produto</th>
                    <th scope='col'>Quantidade</th>
                    <th scope='col'>Preço - UN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>Magaga</td>
                    <td>Notebook</td>
                    <td>12</td>
                    <td>R$2000,00</td>
                </tr>

                <tr>
                    <th scope='row'>2</th>
                    <td>Pandegod</td>
                    <td>SSD 480gb</td>
                    <td>36</td>
                    <td>R$230,50</td>
                </tr>

                <tr>
                    <th scope='row'>3</th>
                    <td>Ficts</td>
                    <td>Iphone XR</td>
                    <td>22</td>
                    <td>R$2500,00</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home
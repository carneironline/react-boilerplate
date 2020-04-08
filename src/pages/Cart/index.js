import React from 'react'
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src='https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/26/HZM-1864-026/HZM-1864-026_zoom2.jpg?ts=1572007514&ims=326x'
                                alt='Nike'
                            />
                        </td>
                        <td>
                            <strong>Tênis Legal</strong>
                            <span>RS 1322</span>
                        </td>
                        <td>
                            <div>
                                <button type='button'>
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color='#7159c1'
                                    />
                                </button>
                                <input type='number' readOnly value={2} />
                                <button type='button'>
                                    <MdAddCircleOutline
                                        size={20}
                                        color='#7159c1'
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>258,80</strong>
                        </td>
                        <td>
                            <button type='button'>
                                <MdDelete size={20} color='#7159c1' />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type='button'>Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 123</strong>
                </Total>
            </footer>
        </Container>
    )
}

import React from 'react'
import Colors from '../constant/colors'

export default function Points ({ points }) {

    return (
        <span style={{textShadow : "1px 1px 1px #ff0000"}}>
            <i className="fas fa-star" style={{ color: Colors.yellow , textShadow : "1px 1px 1px #ff0000"}}></i> {points}
        </span>
        )

}
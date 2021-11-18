import { BiTrash } from "react-icons/bi";
import React from "react";

import { useState, useEffect } from "react";
import "./product.css";

export function User() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3001/api")
			.then((response) => response.json())
			.then((responde) => setData(responde));
	}, []);

	const orderHead = {
		id: 0,
		name: "Name",
		number: "Item",
		unit: "Unit",
		totUnit: "Gr",
		price: "Price",
		totPrice: "£",
		trash: "",
	};
	const [productQuantity, setProductQuantity] = useState("");
	const [orderList, setOrderList] = useState([orderHead]);

	if (data) {
		return (
			<>
				{orderList.map((item) => {
					return (
						<div key={item.name} className="currentOrder">
							<ul>
								<li>{item.name}</li>
								<li>{item.number} </li>
								<li>{item.unit}</li>
								<li>{item.price}</li>
								<li>{item.totUnit}</li>
								<li>{item.totPrice}</li>
								<li>
									<button>{item.trash}</button>
								</li>
							</ul>
							<button></button>
						</div>
					);
				})}

				{data.map((item) => {
					return (
						<div key={item.image} className="product">
							<div className="product_image">
								<img src={item.image} alt={item.name} />
							</div>
							<div className="product_list">
								<h3>{item.name}</h3>
								<p>Pack gr: {item.pack}</p>
								<p>Price £: {item.price}</p>
							</div>
							<div className="product_select">
								<input
									type="number"
									id="select_quantity"
									name="select_quantity"
									placeholder="0"
									onChange={(e) => {
										setProductQuantity(e.target.value);
									}}
								/>

								<button
									type="button"
									value="add"
									onClick={() => {
										const addProduct = {
											name: item.name,
											number: 1 * productQuantity,
											unit: item.pack,
											totUnit: item.pack * productQuantity,
											price: item.price,
											totPrice: item.price * productQuantity,
											trash: <BiTrash />,
										};

										orderList.push(addProduct);
										console.log(addProduct);
										console.log(orderList);
									}}
								>
									add
								</button>
							</div>
						</div>
					);
				})}
			</>
		);
	}
	return <div>no data available</div>;
}

export default User;

import React from "react";
import { useState, useEffect } from "react";
import "./product.css";

export function Admin() {
	const [nameValue, setNameValue] = useState("");
	const [packValue, setPackValue] = useState("");
	const [imageValue, setImageValue] = useState("");
	const [priceValue, setPriceValue] = useState("");
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3001/api")
			.then((response) => response.json())
			.then(setData);
	}, []);

	if (data) {
		console.log(data);
		const Data = data;
		return (
			<>
				<>
					<div className="product_form">
						<input
							type="text"
							value={nameValue}
							onChange={(e) => setNameValue(e.target.value)}
							placeholder="Name"
						/>
						<input
							type="number"
							value={packValue}
							onChange={(e) => setPackValue(e.target.value)}
							placeholder="pack"
						/>
						<input
							type="text"
							value={imageValue}
							onChange={(e) => setImageValue(e.target.value)}
							placeholder="Image URL"
						/>
						<input
							type="number"
							value={priceValue}
							onChange={(e) => setPriceValue(e.target.value)}
							placeholder="Price"
						/>
					</div>
					<button
						id="submit"
						type="button"
						value="singUp"
						onClick={() => {
							fetch(`http://localhost:3001/`, {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									name: nameValue,
									pack: packValue,
									image: imageValue,
									price: priceValue,
								}),
							})
								.then((response) => response.json())
								.then((result) => console.log(result))
								.catch((error) => console.log("error", error));
						}}
					>
						Submit
					</button>
				</>
				{Data.map((item) => {
					return (
						<div key={item.name} className="product">
							<div className="product_image">
								<img src={item.image} alt={item.name} />
							</div>
							<div className="product_list">
								<h3>{item.name}</h3>
								<p>Pack gr: {item.pack}</p>
								<p>Price £: {item.price}</p>
							</div>
							<div className="product_select">
								<button
									name="update_product"
									type="button"
									value="update_product"
									onClick={() => {
										fetch(`http://localhost:3001/`, {
											method: "PUT",
											headers: { "Content-Type": "application/json" },
											body: JSON.stringify({}),
										})
											.then((response) => response.json())
											.then((result) => console.log(result))
											.catch((error) => console.log("error", error));
									}}
								>
									update
								</button>
								<button
									name="delete_product"
									type="button"
									value="delete_product"
									onClick={() => {
										fetch("http://localhost:3001", {
											method: "DELETE",
											headers: { "Content-Type": "application/json" },
											body: JSON.stringify({
												name: item.name,
												pack: item.pack,
												image: item.image,
												price: item.price,
											}),
										})
											.then((response) => response.text())
											.then((result) => console.log(result))
											.catch((error) => console.log("error", error));
									}}
								>
									delete
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

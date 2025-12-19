import React, { useState } from 'react';
import styles from './MyOrders.module.scss';

const mockOrders = [
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Confirmed' },
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Confirmed' },
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Confirmed' },
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Confirmed' },
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Cancelled' },
	{ id: 300, name: 'John', status: 'Paid', amount: 400, address: 'Los Angeles', date: '9-Jan-2022', orderStatus: 'Cancelled' },
];

const filterOptions = [
	'Last 7 Days',
	'Last 30 Days',
	'Last 6 Months',
	'Last Year',
	'All Time',
];

export default function MyOrders() {
	const [filter, setFilter] = useState(filterOptions[0]);

	return (
		<div className={styles.myOrdersPage}>
			<h1 className={styles.header}>My Orders</h1>
			<div className={styles.filterRow}>
				<select value={filter} onChange={e => setFilter(e.target.value)} className={styles.filterSelect}>
					{filterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
				</select>
			</div>
			<div className={styles.ordersTableWrapper}>
				<table className={styles.ordersTable}>
					<thead>
						<tr className={styles.ordersTableHeadRow}>
							<th>ORDER NO.</th>
							<th>CUSTOMER NAME</th>
							<th>PAYMENT STATUS</th>
							<th>AMOUNT</th>
							<th>ADDRESS</th>
							<th>ORDER DATE</th>
							<th>STATUS</th>
						</tr>
					</thead>
					<tbody>
						{mockOrders.map((order, idx) => (
							<tr key={idx} className={idx % 2 === 0 ? styles.ordersTableRow : styles.ordersTableRowAlt}>
								<td>{order.id}</td>
								<td>{order.name}</td>
								<td>{order.status}</td>
								<td>${order.amount}</td>
								<td>{order.address}</td>
								<td>{order.date}</td>
								<td className={order.orderStatus === 'Cancelled' ? styles.cancelled : styles.confirmed}>{order.orderStatus}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

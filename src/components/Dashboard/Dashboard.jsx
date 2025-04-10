import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);


//! Data
const Dashboard = () => {

  //todo Stats Data with Border Colors
  const stats = [
    { title: 'Customers', value: '39,354', change: '−4%', changeType: 'negative', borderColor: '#ff4d4f' },
    { title: 'Products', value: '4,396', change: '+23%', changeType: 'positive', borderColor: '#ffce56' },
    { title: 'Sales', value: '423,39', change: '+38%', changeType: 'positive', borderColor: '#e0e0e0' },
    { title: 'Refunds', value: '39,354', change: '−12%', changeType: 'negative', borderColor: '#4bc0c0' },
  ];


  //todo Data for Revenue Updates (Line + Bar Chart)
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'line',
        label: 'Budget',
        data: [200, 250, 220, 180, 300, 280, 350],
        borderColor: '#00C49F',
        backgroundColor: '#00C49F',
        fill: false,
        tension: 0.1,
      },
      {
        type: 'bar',
        label: 'Expense',
        data: [150, 200, 300, 250, 200, 180, 220],
        backgroundColor: '#f2d7d5',
      },
    ],
  };

  //todo Data for Earnings Bar Chart
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [50000, 30000, 40000, 60000, 70000, 80000],
        backgroundColor: '#8884d8',
      },
    ],
  };

  //todo Data for Yearly Sales Pie Chart (Updated Data)
  const salesData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [40, 20, 25, 15], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], 
        borderWidth: 0, 
      },
    ],
  };

  //todo Data for Sales Overview (Line Chart)
  const salesOverviewData = {
    labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011'],
    datasets: [
      {
        label: 'Jordan',
        data: [20, 25, 30, 40, 50, 70, 85],
        borderColor: '#e74c3c',
        backgroundColor: '#e74c3c',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Dubai',
        data: [15, 20, 25, 35, 45, 60, 80],
        borderColor: '#f5b041',
        backgroundColor: '#f5b041',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Qatar',
        data: [10, 15, 20, 30, 40, 55, 90],
        borderColor: '#884ea0',
        backgroundColor: '#884ea0',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  //todo Transactions Data
  const transactions = [
    { icon: '💵', description: 'Paypal Transfer', type: 'Money Added', amount: 350, change: 'positive' },
    { icon: '🛡️', description: 'Wallet', type: 'Bill Payment', amount: -560, change: 'negative' },
    { icon: '💳', description: 'Credit Card', type: 'Money Reversed', amount: 350, change: 'positive' },
    { icon: '🏦', description: 'Bank Transfer', type: 'Money Added', amount: 350, change: 'positive' },
    { icon: '💸', description: 'Refund', type: 'Payment Sent', amount: -560, change: 'negative' },
  ];

  //! Components
  return (
    <div className="dashboard-container">
      
      {/* Earnings Card */}
      <div className="card earnings-card">
        <h3>Earnings</h3>
        <h2>$63,448.78</h2>
        <button className="download-btn">Download</button>
      </div>

      {/* Stats Cards */}
      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderColor: stat.borderColor }}>
            <div className="stat-content">
              <h4>{stat.title}</h4>
              <p>
                {stat.value} <span className={stat.changeType}>{stat.change}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Updates Chart */}
      <div className="card chart-card revenue-chart">
        <h3>Revenue Updates</h3>
        <div className="chart-legend">
          <span className="legend-item expense">Expense</span>
          <span className="legend-item budget">Budget</span>
        </div>
        <div className="chart-container">
          <Line data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-stats">
          <div className="stat-box">
            <h4>Budget</h4>
            <p>$93,438 <span className="positive">23%</span></p>
          </div>
          <div className="stat-box">
            <h4>Expense</h4>
            <p>$48,487</p>
          </div>
        </div>
        <button className="download-report-btn">Download Report</button>
      </div>

      {/* Earnings Bar Chart */}
      <div className="card chart-card earnings-chart">
        <h3>Earnings</h3>
        <h2>$63,448.78</h2>
        <p>Monthly</p>
        <div className="chart-container">
          <Bar data={earningsData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Yearly Sales Pie Chart */}
      <div className="card chart-card sales-chart">
        <h3>Yearly Sales</h3>
        <h2>$43,246</h2>
        <div className="chart-container">
          <Pie data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-legend">
          <span className="legend-item q1">2021</span>
          <span className="legend-item q2">2022</span>
          <span className="legend-item q3">2023</span>
          <span className="legend-item q4">2024</span>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card transactions-card">
        <div className="card-header">
          <h3>Recent Transactions</h3>
          <span>March 2021</span>
        </div>
        <div className="transactions-list">
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <div className="transaction-icon">{transaction.icon}</div>
              <div className="transaction-details">
                <p>{transaction.description}</p>
                <span>{transaction.type}</span>
              </div>
              <div className={`transaction-amount ${transaction.change}`}>
                {transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
              </div>
            </div>
          ))}
        </div>
        <button className="add-btn">Add</button>
        <p className="transactions-count">36 Recent Transactions</p>
      </div>

      {/* Sales Overview Chart */}
      <div className="card chart-card sales-overview-chart">
        <div className="card-header">
          <h3>Sales Overview</h3>
          <span>March 2021</span>
        </div>
        <div className="chart-container">
          <Line data={salesOverviewData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
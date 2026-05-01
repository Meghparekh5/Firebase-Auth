function Dashboard({ user }) {
  return (
    <div className="container">
      <div className="card">
        <h3>Dashboard</h3>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;
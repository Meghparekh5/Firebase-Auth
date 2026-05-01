function Dashboard({ user }) {
  return (
    <div className="container">
      <div className="card">
        <h2>YOU AE LOGGED IN</h2>
        <p>{user.displayName}</p>
      </div>
    </div>
  );
}

export default Dashboard;
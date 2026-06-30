import AppLayout from './components/Layout/AppLayout';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <AppLayout>
      <h1>Dashboard</h1>
      <p>Welcome to TaskFlow</p>

      <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
        <Button variant="primary">Create Task</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </div>

      <Card className="" >
        <h3>Sample Card</h3>
        <p>This is what a card looks like.</p>
      </Card>
    </AppLayout>
  );
}

export default App;






// import AppLayout from './components/Layout/AppLayout';

// function App() {
//   return (
//     <AppLayout>
//       <h1>Dashboard</h1>
//       <p>Welcome to TaskFlow</p>
//     </AppLayout>
//   );
// }

// export default App;
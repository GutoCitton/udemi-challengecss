import CarDetail from "./components/carDetail";
import './App.css';

const cars = [
  {id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0},
  {id: 2, brand: 'Kia', color: 'Branco', newCar: false, km: 2341},
  {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 67899},
]


function App() {
  return (
    <div>
      <div className="div1">
        <h1 className="title_test">Teste</h1>
      </div>

      {cars.map((car)=> (
        <CarDetail
        key={car.id}
        brand={car.brand}
        color={car.color}
        km= {car.km}
        newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;

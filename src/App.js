import './App.css';
import Characters from "./components/first task/Character/Characters";
import CardWithInfo from "./components/second task/cardWithInfo/cardWithInfo";
import Family from "./components/simpsonsTask/family/family";

function App() {
    return (<div>

            <div className={'simpsons'}>
                <h2>Simpsons family</h2>
                <Family />
            </div>


            <div className={'RickAndMorty'}>
                <h2>Rick&Morty api</h2>
                <Characters/>
            </div>


            <div className={'sixOfRM'}>
                <h2>Six characters of Rick&Morty</h2>
                <div className={'labels'}>
                    <CardWithInfo name={"Octopus Man"} gender={'Male'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/254.jpeg'}/>
                    <CardWithInfo name={"Izzy"} gender={'(animal)'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/167.jpeg'}/>
                    <CardWithInfo name={"Mike Johnson"} gender={'Male'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/613.jpeg'}/>
                    <CardWithInfo name={"Eli's Girlfriend"} gender={'Female'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/111.jpeg'}/>
                    <CardWithInfo name={"Michael Denny and the Denny Singers"} gender={'Male'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/222.jpeg'}/>
                    <CardWithInfo name={"Stair Goblin"} gender={'Genderless'}
                                  image={'https://rickandmortyapi.com/api/character/avatar/333.jpeg'}/>
                </div>
            </div>

        </div>

    );
}

export default App;

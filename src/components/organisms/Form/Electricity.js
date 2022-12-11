import React from 'react';
import {useState, useEffect} from 'react';
import "./_Form.scss";
import {Link, useParams} from "react-router-dom";
import "./_Table.scss";

const getData = (key) => {
    const data = window.localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}


const NewItemForm = () => {
    const params = useParams();
    let converter;
    switch (params.company) {
        case 'Tauron':
            converter = 0.73;
            break;
        case 'Energa':
            converter = 0.80;
            break;
        case 'E.ON':
            converter = 0.80;
            break;
        case 'PGE':
            converter = 0.78;
            break;
        case 'Enea':
            converter = 0.73;
            break;
    }
    const [overall,setOverall]= useState(getData("overall"));
    const [result,setResult] =useState(0);
    const [equipments, setEquipments] = useState(getData("equipments"));
    const [device, setDevice] = useState('Lodówka');
    const [power, setPower] = useState('');
    const [hours, setHours] = useState('');
    const [days, setDays] = useState('');
    const [info,setInfo] = useState(getData("info")?getData("info"):[]);


    const handleAddSubmit = (e) => {
      e.preventDefault();


        setEquipments({device, power, hours, days})
        setResult(Number(power) * Number(days)* Number(hours) * converter);
        setOverall(Number(overall) + Number(result));



        setInfo(tab => [...tab, {
            device,
            power,
            hours,
            days,
            result,

        }])
    }

    useEffect( () =>{
            setResult(Number(power) * Number(days)* Number(hours) * converter);
        },
        [power,
            days,
            hours]

    )
    useEffect(() => {
        localStorage.setItem('equipments', JSON.stringify(equipments));
    }, [equipments])

    useEffect(() => {
        localStorage.setItem('info', JSON.stringify(info));
    }, [info])

    useEffect(() => {
        localStorage.setItem('overall', JSON.stringify(overall));
    }, [overall])
    console.log({device, power, hours, days,result,overall});

    return (
        <div className='wraper'>
            <h1>Przelicznik prądu</h1>
            <div className='form-container'>
                <form autoComplete="off" className='form-group'
                      onSubmit={handleAddSubmit}
                >
                    <label>Urządzenie</label>
                    <div className="custom-select">
                        <select  className="selectInput" value={device} onChange={e => setDevice(e.target.value)}>
                            <option value="Lodówka">Lodówka</option>
                            <option value="Telewizor">Telewizor</option>
                            <option value="Pralka">Pralka</option>
                            <option value="Mikrofalówka">Mikrofalówka</option>
                            <option value="Komputer">Komputer</option>
                            <option value="Zmywarka">Zmywarka</option>
                            <option value="Odkurzacz">Odkurzacz</option>
                            <option value="Kuchenka Elektryczna">Kuchenka Elektryczna</option>
                        </select>

                    </div>
                    <br/>

                    <label>Moc[kWh]</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setPower(e.target.value)} value={power}/>
                    <br/>
                    <label>Ilość godzin/dzień</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setHours(e.target.value)} value={hours}/>
                    <br/>
                    <label>Ilość dni/miesiąc</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setDays(e.target.value)} value={days}/>
                    <br/>
                    <button type="submit" className='btn btn-success btn-md'>
                        Dodaj
                    </button>

                </form>

                <button type ="reset" onClick={() => {
                    setOverall("")
                    localStorage.removeItem("overall")
                    info.length=0
                    localStorage.removeItem("info")
                }} className='btn btn-success btn-md'>
                    Usuń dane
                </button>
                <Link to={"/Contact/"} onClick={() => {
                }} >
                    <button type ="button" className='btn btn-success btn-md'>
                        Prześlij dane
                    </button>


                </Link>
            </div>


            <div className='view-container'>

                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Urządzenie</th>
                            <th>Moc</th>
                            <th>Godziny</th>
                            <th>Dni</th>
                            <th>Zużycie[zł]</th>

                        </tr>
                        </thead>
                        <tbody>

                        {info.map(equipment => (
                        <tr key={equipment.device}>
                            <td>{equipment.device}</td>
                            <td>{equipment.power}</td>
                            <td>{equipment.hours}</td>
                            <td>{equipment.days}</td>
                            <td>{equipment.result}</td>
                        </tr>))}

                        <th>Ogólne zużycie[zł]</th>
                        </tbody>
                           <tr>
                               <td>{overall}</td>
                            </tr>
                            </table>
                </div>
            </div>
        </div>
    );
}
export default NewItemForm;





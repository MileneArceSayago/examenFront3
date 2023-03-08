import { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css";

function Form(){
    const [petName, setPetName] = useState("");
    const [petColor, setPetColor] = useState("");
    const [petAge, setPetAge] = useState("");
    const [vet, setVet] = useState("");


    const onChangePetName = (e) => setPetName(e.target.value);
    const onChangePetColor = (e) => setPetColor(e.target.value);
    const onChangePetAge = (e) => setPetAge(e.target.value);
    const onChangeVet = (e) => setVet(e.target.value);
    const [isErrorPet, setIsErrorPet] = useState(false);
    const [isShowCard, setIsShowCard] = useState(false);


    const validatePetName = (petName) => {
        if ((petName.trim()).length >= 3){
            return true;
        }else{
            return false;
        }
    }


    const validatePetColor = (petColor) => {
        if (petColor.length >= 6){
            return true;
        }else{
            return false;
        }
    }


    function onSubmitForm(e){
        e.preventDefault();

        if(validatePetName(petName) && validatePetColor(petColor)){
            setIsErrorPet(false)
            console.log("Mascota guardada")
            setIsShowCard(true)
        }else{
            setIsErrorPet(true)
            console.log("La info es incorrecta")
            setIsShowCard(false)
        }
    }

    return(
        <>
        <h1>Veterinaria DH</h1>
        <h2>Ingresa los datos de tu mascota</h2>
        <form onSubmit={onSubmitForm} className={styles.form}>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    value={petName}
                    onChange={onChangePetName}
                    className={styles.input}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese el color"
                    value={petColor}
                    onChange={onChangePetColor}
                    className={styles.input}
                />
            </div>
            {isErrorPet && <p className={styles.error}>Por favor chequea que la información sea correcta</p>}
            <div>
                <input
                    type="number"
                    placeholder="Ingrese la edad"
                    value={petAge}
                    onChange={onChangePetAge}
                    className={styles.input}
                    min="0"
                />
            </div>
                <select 
                    value={vet} 
                    placeholder="Escoge un veterinario"
                    onChange={onChangeVet}
                    required
                    className={styles.select}
                >
                    <option value="" disabled hidden>Escoge un veterinario</option>
                    <option value="Patitas suaves">Dr. Patitas Suaves</option>
                    <option value="Peludito">Dr. Peludito</option>
                    <option value="Garritas">Dr. Garritas</option>
                </select>
                <div>
                    <button type="submit" className={styles.button}>Añade a tu amigo</button>
                </div>
        </form>
        {isShowCard ? <Card petName={petName} petColor={petColor} petAge={petAge} vet={vet} />: null}
        </>
    )
}

export default Form;
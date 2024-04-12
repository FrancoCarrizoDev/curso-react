import Button from "./Button"


const ComponentePadre = ({text}) => {

    const handleClick = () => {
        console.log(text)
    }

    return (
        <div>
            <Button handleClick={handleClick} />
        </div>
    )
}

export default ComponentePadre;
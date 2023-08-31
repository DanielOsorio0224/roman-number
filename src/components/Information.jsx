import imgNumbers from '../assets/numbers.png'

export default function Information() {
    return (
        <section className="container p-5 ">
            <h3 className="fw-bold">Definición</h3>
            <p className="general-information">
                La numeración romana es un sistema de numeración que se desarrolló en la Antigua Roma y
                se utilizó en todo el Imperio romano, manteniéndose con posterioridad a su desaparición y 
                todavía utilizado en algunos ámbitos. Este sistema emplea algunas letras mayúsculas como 
                símbolos para representar ciertos valores. 
                Los números se escriben como combinaciones de letras.
            </p>
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <img src={imgNumbers} alt="numbers" />
                </div>
                <div className="m-5">
                    <span className="fw-bold">Notación Números del 1 al 1001</span> 
                </div>
            </div>
        </section>
    )
}

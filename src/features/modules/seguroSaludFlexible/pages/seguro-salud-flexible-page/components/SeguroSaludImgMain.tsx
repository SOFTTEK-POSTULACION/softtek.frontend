import imgFamily from '../../../img/family.png';

export const SeguroSaludImgMain = () => {
    return (
        <div className="col-lg-6 col-xl-5">
            <img 
                src={imgFamily} 
                alt="Familia sonriendo, cubierta por el Seguro Salud Flexible de RIMAC" 
                width="100%" 
                className="imgFamilyDesktop" 
            />
        </div>
    );
};
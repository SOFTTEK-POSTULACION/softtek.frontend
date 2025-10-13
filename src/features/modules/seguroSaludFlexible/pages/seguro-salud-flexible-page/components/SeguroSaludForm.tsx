import {
    FormControl, Select, MenuItem, TextField, FormGroup,
    FormControlLabel, Checkbox, Box, Link, Button, Typography
} from '@mui/material';

import imgFamily from '../../../img/family.png';
import type { ISeguroSaludFormProps } from './interfaces/ISeguroSaludFormProps.interface';

const inputHeightStyle = {
    '& .MuiInputBase-formControl': {
        height: '56px',
    },
}

export const SeguroSaludForm = ({
    onSubmit, onChange, onSelectChange, formData, errors
}: ISeguroSaludFormProps) => {

    const { sTipoDocumento, sDocumento, sCelular, bPoliticaPriv, bPoliticaCom } = formData;

    return (
        <div className="col-lg-6 col-xl-5">
            <form noValidate onSubmit={onSubmit}>
                <div className="boxSeguroSaludFlexible">
                    <div className="boxHead">
                        <div className="boxTitle">
                            <span>Seguro Salud Flexible</span>
                            <h3>Creado para ti y tu <br className="hideBr" /> familia</h3>
                        </div>
                        <div className="boxImgFamily"><img src={imgFamily} alt="" width="100%" className="imgFamilyMobile" /></div>
                        <div className="boxDescription"><p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p></div>
                    </div>

                    <div className="boxBody">
                        <Box>
                            <div className="inputDNI">
                                <FormControl
                                    fullWidth
                                    sx={{
                                        ...inputHeightStyle,
                                        maxWidth: 150,  
                                        borderTopLeftRadius: '5px',
                                        borderBottomLeftRadius: '5px',
                                        borderRight: 'none',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '1px solid #5E6488',
                                            },
                                        },
                                    }}
                                >
                                    <Select
                                        sx={{
                                            borderRadius: 'inherit',
                                            padding: '5px',
                                            borderRight: 'none'
                                        }}
                                        value={sTipoDocumento}
                                        name="sTipoDocumento"
                                        onChange={onSelectChange}
                                    >
                                        <MenuItem value={1}>DNI</MenuItem>
                                        <MenuItem value={2}>CE</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    label="Nro. de Documento"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        ...inputHeightStyle,
                                        minWidth: 200,
                                        borderTopRightRadius: "8px",
                                        borderBottomRightRadius: "8px",
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 'inherit',
                                            padding: '5px',
                                            '& fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '1px solid #5E6488',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#7d7d7d',
                                            top: "5px",
                                            '&.MuiInputLabel-shrink': {
                                                top: "0"
                                            },
                                        },
                                    }}
                                    required
                                    name="sDocumento"
                                    value={sDocumento}
                                    onChange={onChange}
                                    error={!!errors.sDocumento}
                                />
                            </div>
                            {errors.sDocumento && <Typography color="error" variant="caption" sx={{ display: 'block', textAlign: 'left', ml: '14px', mt: '3px' }}>{errors.sDocumento}</Typography>}
                        </Box>

                        <Box sx={{ mb: 3, mt: 2 }}>
                            <div className="inputCelular">
                                <TextField
                                    label="Celular"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        ...inputHeightStyle,
                                        mt: 0,
                                        minWidth: 150,
                                        borderRadius: "8px",

                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 'inherit',
                                            borderLeft: 'none',
                                            padding: '5px',
                                            '& fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#5E6488',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '1px solid #5E6488',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#7d7d7d',
                                            top: "5px",
                                            '&.MuiInputLabel-shrink': {
                                                top: "0"
                                            },
                                        },
                                    }}
                                    required
                                    value={sCelular}
                                    name="sCelular"
                                    onChange={onChange}
                                    error={!!errors.sCelular}
                                    helperText={errors.sCelular || ''}
                                />
                            </div>
                        </Box>

                        <div className="inputCheckbox">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            //defaultChecked
                                            sx={{
                                                color: '#000000', // Color no seleccionado
                                                '&.Mui-checked': { color: '#000000', /*Color cuando está seleccionado*/ },
                                            }}
                                            value={bPoliticaPriv}
                                            name="bPoliticaPriv"
                                            onChange={onChange}
                                        />}
                                    label="Acepto lo Política de Privacidad"
                                />
                                {errors.bPoliticaPriv && <Typography color="error" variant="caption">{errors.bPoliticaPriv}</Typography>}

                                <FormControlLabel
                                    required
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: '#000000',
                                                '&.Mui-checked': { color: '#000000' },
                                            }}
                                            value={bPoliticaCom}
                                            name="bPoliticaCom"
                                            onChange={onChange}
                                        />
                                    }
                                    label="Acepto la Política Comunicaciones Comerciales"
                                />
                                {errors.bPoliticaCom && <Typography color="error" variant="caption">{errors.bPoliticaCom}</Typography>}
                            </FormGroup>

                            <Box>
                                <Link href="#" className="linkTermino">Aplican Términos y Condiciones.</Link>
                            </Box>
                        </div>
                    </div>

                    <div className="boxFoot">
                        <Button
                            variant="contained"
                            disableElevation
                            className="btnCotizar"
                            style={{
                                borderRadius: 35,
                                backgroundColor: "#000000",
                                padding: "18px 36px",
                                fontSize: "20px",
                                fontWeight: "700",
                                textTransform: "capitalize",
                                marginTop: "24px",
                                width: "250px",
                                height: 64,
                                letterSpacing: "1.5px"
                            }}
                            type="submit"
                        >
                            Cotiza aquí
                        </Button>
                    </div>
                </div>


            </form>
        </div>
    );
};
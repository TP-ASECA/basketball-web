// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import {useState} from "react";
//
// const ClubDropDown = () => {
//
//     const [clubsData, setClubsData] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//
//     function options() {
//         if (clubsData) {
//             return (
//                 clubsData && educationalUnits.map((educationalUnit: unitData) =>
//                     (
//                         { label: educationalUnit.name + "   (" + educationalUnit.emailDomain + ")", id: educationalUnit.id }
//                     ))
//             );
//         }else{
//             return (
//                 <MenuItem
//                 >
//                     {"No hay unidades Educativas Disponibles"}
//                 </MenuItem>
//             )
//         }
//     }
//
//     return (
//         <div>
//             <Autocomplete
//                 disablePortal
//                 value={clubsData}
//                 id="combo-box-demo"
//                 options={options()}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params} label="Unidad Educativa"/>}
//                 onChange={ (event: any, newValue: unitDataAutocomplete | null) => {setUnitData(newValue);} }
//             />
//         </div>
//     );
// }
//
//
// export default ClubDropDown;
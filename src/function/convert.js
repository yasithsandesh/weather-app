const  convertTemp = (temp)=>{
    const cel = temp - 273.15;
    const l = cel + 1;
    return  l.toFixed(); 
}



export {convertTemp};
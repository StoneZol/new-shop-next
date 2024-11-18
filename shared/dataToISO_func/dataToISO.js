import moment from 'moment';

const dataToISO =(toISO)=>{
    const date = moment(toISO)
    return date.format('DD.MM.YYYY HH:mm')
}

export default dataToISO;
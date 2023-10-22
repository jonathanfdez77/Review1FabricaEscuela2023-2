import axios from 'axios'; // Para realizar solicitudes HTTP al backend


export const solicitarServicio = async (servicio: any) => {
  try {
    const response = await axios.post('/api/servicios/solicitar', servicio); 
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const aceptarServicio = async (servicio: any) => {
  try {
    const response = await axios.put('/api/servicios/solicitar/aceptar', servicio);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const rechazarServicio = async (id: number) => {
  try {
    const response = await axios.delete(`/api/servicios/solicitar/rechazar/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

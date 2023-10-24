import axios from 'axios'; // Para realizar solicitudes HTTP al backend

export const solicitarServicio = async (servicio: { usuario: { idUsuario: number; }; ubicacionOrigen: { direccion: string; }; ubicacionDestino: { direccion: string; }; fechaInicio: string; idTipoServicio: number; detalles: string; }) => {
  try {
    const response = await axios.post('http://localhost:8080/ssmu-api/api/servicios/solicitar', servicio);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const aceptarServicio = async (id: any) => {
  try {
    const response = await axios.put(`http://localhost:8080/ssmu-api/api/servicios/solicitar/${id}/aceptar`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const rechazarServicio = async (id: any) => {
  try {
    const response = await axios.delete(`http://localhost:8080/ssmu-api/api/servicios/solicitar/${id}/rechazar`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const SolicitarValorServicio = async (id: any) => {
  try {
    const response = await axios.get(`http://localhost:8080/ssmu-api/api/servicios/solicitar/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

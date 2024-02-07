import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <>
            {pacientes && pacientes.length ? (
                <>
                    <div className='md:w-1/2 lg:w-2/5 md:h-screen md:overflow-y-scroll'>
                        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                        <p className='text-xl mt-5 mb-10 text-center'>
                            Administra tu {''} <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                        </p>

                        {pacientes.map((paciente) => (
                            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className='md:w-1/2 lg:w-2/5 md:h-screen md:overflow-y-scroll'>
                        <h2 className='font-black text-3xl text-center'>Sin Pacientes</h2>
                        <p className='text-xl mt-5 mb-10 text-center'>
                            Agrega Pacientes y {''} <span className='text-indigo-600 font-bold'> Apareceran Aqui</span>
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default ListadoPacientes;

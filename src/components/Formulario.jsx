import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
        };

        if (paciente.id) {
            //Editando el registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState) => (pacienteState.id === paciente.id ? objetoPaciente : pacienteState));

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    };

    return (
        <>
            <div className='md:w-1/2 lg:w-2/5 mx-5'>
                <h1 className='font-black text-3xl text-center'>Formulario</h1>
                <p className='text-xl mt-5 text-center mb-10'>
                    Anade Pacientes y {''} <span className='text-indigo-600 font-bold'>Administralos</span>
                </p>

                <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                    {error && (
                        <Error>
                            <p>Todos los campos son obligatorios</p>
                        </Error>
                    )}

                    <div className='mb-5'>
                        <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                            Nombre Mascota {nombre}
                        </label>
                        <input id='mascota' className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' type='text' placeholder='Nombre de la Mascota' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                            Nombre Propietario {propietario}
                        </label>
                        <input id='propietario' className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' type='text' placeholder='Nombre del Propietario' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                            Email
                        </label>
                        <input id='email' className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' type='email' placeholder='Email Contacto Propietario' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='Alta' className='block text-gray-700 uppercase font-bold'>
                            Fecha de Alta
                        </label>
                        <input id='Alta' className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' type='date' value={alta} onChange={(e) => setAlta(e.target.value)} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                            Sintomas
                        </label>
                        <textarea name='' id='sintomas' className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' placeholder='Describe los sintomas' value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
                    </div>

                    <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
                </form>
            </div>
        </>
    );
};

export default Formulario;

import { Field, Formik } from 'formik'
import logo from '../../img/logo.svg'
import { connect } from 'react-redux'
import { CardForm, FieldForm, InputFile, SubTituloForm, TextoForm, TituloForm } from './Form.style'
import { handleLogin } from '../../store/actions/authActions'
import {useNavigate} from 'react-router-dom'
import { ValidationRegister } from '../../utils/validationsForm'
import { toast } from '../Toaster/Toaster'

const FormRegister = ({auth, dispatch}) => {

  const navigate = useNavigate()

  const buttonSubmit = (props) => {
    console.log(props.errors)
    
    // toast.fire({
    //     icon: 'error',
    //     title: props.errors.login
    // })
    // toast.fire({
    //     icon: 'error',
    //     title: props.errors.senha
    // })
    // toast.fire({
    //     icon: 'error',
    //     title: props.errors.confirmarSenha
    // })
  }

  return (
    <CardForm>
        <img src={logo}/>
        <SubTituloForm>Sistema de reembolso</SubTituloForm>
        <TituloForm>Cadastrar usuário</TituloForm>
        <Formik
            initialValues={{
                nome: '',
                login: '',
                senha: '',
                confirmarSenha: '',
                foto: ''
            }}
            onSubmit={(values, errors) => {
                console.log(values)
                // handleLogin(dispatch, values, navigate)
            }}
            validationSchema={ValidationRegister}
        >
            {props => (
                <FieldForm onSubmit={props.handleSubmit} encType='multipart/form-data'>
                    <label htmlFor="nome">nome*</label>             
                    <Field 
                        type="text" 
                        onChange={props.handleChange}
                        value={props.values.nome}
                        name='nome'
                    />
                    {props.errors.nome && props.touched.nome ? ( 
                        <div>{props.errors.nome}</div>
                        ) : null
                    }

                    <label htmlFor="login">email*</label> 
                    <Field 
                        type="text" 
                        onChange={props.handleChange}
                        value={props.values.login}
                        name='login'
                    />
                    {props.errors.login && props.touched.login ? ( 
                        <div>{props.errors.login}</div>
                        ) : null
                    }                  

                    <label htmlFor="senha">senha*</label>                
                    <input 
                        type="password" 
                        onChange={props.handleChange}
                        value={props.values.senha}
                        name='senha'
                    />

                    <label htmlFor="confirmarSenha">Confirme senha*</label>                
                    <input 
                        type="password" 
                        onChange={props.handleChange}
                        value={props.values.confirmarSenha}
                        name='confirmarSenha'
                    />
                    
                    <label>Escolha uma foto</label>
                    <InputFile 
                        type="file" 
                        id='file'
                        onChange={props.handleChange}
                        value={props.values.foto}
                        name='foto'
                    />
                    
                    <button onClick={() => buttonSubmit(props)} type='submit'>Cadastrar</button>
                </FieldForm>
            )}
        </Formik>

        <TextoForm
            color='#3751FF'
            cursor='pointer'
            onClick={() => navigate('/')}
        >
            Voltar para o login
        </TextoForm>
    </CardForm>
    
  )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(FormRegister)
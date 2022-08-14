import { Formik } from 'formik'
import logo from '../../img/logo.svg'
import { connect } from 'react-redux'
import { CardForm, FieldForm, SubTituloForm, TextoForm, TituloForm } from './Form.style'
import { handleLogin } from '../../store/actions/authActions'
import {useNavigate} from 'react-router-dom'
import { ButtonForm } from '../Button/Button'

const FormLogin = ({auth, dispatch}) => {

  const navigate = useNavigate()

  return (
    <CardForm>
        <img src={logo}/>
        <SubTituloForm>Sistema de reembolso</SubTituloForm>
        <TituloForm>Entrar no usuário</TituloForm>
        <TextoForm
            color='#9FA2B4'
        >
            Entre usando seu email e senha
        </TextoForm>
        <Formik
            initialValues={{
                login: '',
                senha: ''
            }}
            onSubmit={values => {
                handleLogin(dispatch, values, navigate)
            }}
        >
            {props => (
                <FieldForm onSubmit={props.handleSubmit}>
                    <label htmlFor="login">email</label>             
                    <input 
                        type="text" 
                        onChange={props.handleChange}
                        value={props.values.login}
                        name='login'
                    />
                    

                    <label htmlFor="senha">senha</label>                
                    <input 
                        type="password" 
                        onChange={props.handleChange}
                        value={props.values.senha}
                        name='senha'
                    />

                    <ButtonForm type='submit'>Entrar</ButtonForm>
                </FieldForm>
            )}
        </Formik>
        <TextoForm
            color='#3751FF'
            cursor='pointer'
            onClick={() => navigate('/cadastro')}
        >
            Não possuo cadastro
        </TextoForm>
    </CardForm>
    
  )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(FormLogin)
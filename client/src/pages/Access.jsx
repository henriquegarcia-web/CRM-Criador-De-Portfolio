import React from 'react'

import {
  FullBackground
} from '../globalStyles' // Import de estilos globais

import {
  AccessPage,
  AccessForm,
  AccessFormHeader,
  AccessInputContainer,
  AccessInput,
  AccessButton,
  AccessInputImageVerify
} from './AccessStyle' // Import de estilos próprios

import {
  FiCheckCircle,
  FiXCircle
} from 'react-icons/fi'

import Logo from '../components/Logo/Logo' // Import LOGO

import { AccessData } from '../data/AccessData/data' // Import DATA - É usado para definir o background e opacidade da página

// --------------------------------- PÁGINA DE LOGIN

const Access = ({ data }) => { // Recebe {data} do App.js sendo um array contendo os inputs respectivos: Login ou Cadastro
  return (
    <AccessPage>
      <FullBackground bgImage={AccessData.bgImage} opacity={AccessData.bgOpacity}></FullBackground>

      <AccessForm> {/* Formulário de Login / Cadastro de acordo com o {data} */}
        <AccessFormHeader>
          <Logo h1Size='36px' h2Size='24px' mgBottom='35px' color='white' />
          <div>
            <h3>{data.title}</h3>
            <a href={data.actionTo}>{data.action}</a>
          </div>
        </AccessFormHeader>

        {data.inputs.map(({id, type, placeholder, icon}) => {
          return (
            <RenderInputs key={id} type={type}  placeholder={placeholder} icon={icon} />
          )
        })}
      </AccessForm>
    </AccessPage>
  )
}
export default Access

// --------------------------------- INPUTS LOGIN | CADASTRO

const RenderInputs = ({ type, placeholder, icon }) => {  
  switch (type) {

    case 'input':
      return (
        <AccessInputContainer>
          {icon}
          <AccessInput type='text' placeholder={placeholder} />
        </AccessInputContainer>
      )
    
    case 'file':
      return (
        <AccessInputContainer>
          <div className='inputicon'>{icon}</div>
          <AccessInput type={type} placeholder={placeholder} name='file' id='file' className='inputfile' />
          <label  htmlFor="file"> Escolha uma foto </label>
          
          <ImageVerify result={true} />

        </AccessInputContainer>
      )

    case 'button':
      return (
        <AccessButton>
          <a href="/painel" className="btn">
            <svg width="277" height="62">
              <defs>
                  <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#FF8282"/>
                      <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
            </svg>
            <span>{placeholder}</span>
          </a>
        </AccessButton>
      )
  
    default:
      break;
  } 
}

const ImageVerify = ({ result }) => {

  const renderIcon = (result ? <FiCheckCircle /> : <FiXCircle />)

  return (
    <AccessInputImageVerify>
      {renderIcon}
    </AccessInputImageVerify>
  )
}
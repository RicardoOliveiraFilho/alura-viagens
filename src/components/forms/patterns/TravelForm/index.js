import React from 'react';

import FormContentWrapper from './styles/FormContentWrapper';
import Text from '../../../foundation/Text';
import TextField from '../../TextField';
import Button from '../../Button';

function FormContent() {
  return (
    <FormContentWrapper>
      <Text
        tag="h1"
        variant="titleXS"
        color="secondary.main"
        marginTop={{
          xs: '18px',
          md: '11px',
        }}
      >
        Alura Viagens
      </Text>
      <Text
        tag="p"
        variant="sectionText"
        marginTop={{
          xs: '-15px',
          md: '-35px',
        }}
        marginLeft={{
          md: '10px',
        }}
      >
        Quando será a viagem?
      </Text>

      <FormContentWrapper.InputGroup
        sizeInput="175px"
      >
        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de saída
          </Text>

          <TextField
            name="data-saida"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>

        <div style={{
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de retorno
          </Text>

          <TextField
            name="data-retorno"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="255px"
      >
        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Local de origem
          </Text>

          <TextField
            name="local-origem"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>

        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Local de chegada
          </Text>

          <TextField
            name="data-chegada"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <Text
        tag="p"
        variant="sectionText"
        marginTop="-10px"
        marginLeft={{
          md: '10px',
        }}
      >
        Como será o pagamento?
      </Text>
      <Text
        tag="p"
        variant="sectionText"
        marginTop="-10px"
        marginLeft={{
          md: '10px',
        }}
      >
        Quem vai viajar?
      </Text>

      <FormContentWrapper.InputGroup
        sizeInput="530px"
        flexDirection="column"
      >
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Nome
          </Text>

          <TextField
            name="nome"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Sobrenome
          </Text>

          <TextField
            name="sobrenome"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="235px"
      >
        <div style={{
          marginRight: '60px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            País de residência
          </Text>

          <TextField
            name="pais-residencia"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>

        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de nascimento
          </Text>

          <TextField
            name="data-nascimento"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="530px"
        flexDirection="column"
      >
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            CPF
          </Text>

          <TextField
            name="nome"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Email
          </Text>

          <TextField
            name="sobrenome"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Telefone
          </Text>

          <TextField
            name="nome"
            value=""
            width="318px"
            onChange={() => {}}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <Button
        color="primary.contrast"
        background="background.main"
        type="submit"
      >
        Comprar
      </Button>
    </FormContentWrapper>
  );
}

export default function TravelForm() {
  return (
    <div>
      <FormContent />
    </div>
  );
}

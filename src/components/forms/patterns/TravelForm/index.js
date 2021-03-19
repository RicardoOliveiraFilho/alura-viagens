import React, { useState } from 'react';

import FormContentWrapper from './styles/FormContentWrapper';
import Text from '../../../foundation/Text';
import TextField from '../../TextField';
import Button from '../../Button';
import Radio from '../../Radio';

function FormContent() {
  const [formData, setFormData] = useState({
    dataSaida: '',
    dataRetorno: '',
    localOrigem: '',
    localChegada: '',
    tipoPagamentoSelected: '',
    nome: '',
    sobrenome: '',
    paisResidencia: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    telefone: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  function handleClick(event) {
    const isClickArea = event.target.closest('[data-click-area="true"]');
    setFormData({
      ...formData,
      tipoPagamentoSelected: isClickArea.firstChild.value,
    });
  }

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
            name="dataSaida"
            value={formData.dataSaida}
            width="318px"
            onChange={handleChange}
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
            name="dataRetorno"
            value={formData.dataRetorno}
            width="318px"
            onChange={handleChange}
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
            name="localOrigem"
            value={formData.localOrigem}
            width="318px"
            onChange={handleChange}
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
            name="localChegada"
            value={formData.localChegada}
            width="318px"
            onChange={handleChange}
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

      <FormContentWrapper.InputGroup
        marginTop="-10px"
        marginBottom="30px"
        flexDirection="row"
      >
        <Radio
          start_round_edge
          name="tipo-pagamento"
          value="Transferência"
          srcimg="images/transferencia.png"
          selected={formData.tipoPagamentoSelected === 'Transferência'}
          onClick={handleClick}
        />

        <Radio
          name="tipo-pagamento"
          value="Cartão"
          srcimg="images/credit_card.png"
          selected={formData.tipoPagamentoSelected === 'Cartão'}
          onClick={handleClick}
        />

        <Radio
          end_round_edge
          name="tipo-pagamento"
          value="PayPal"
          srcimg="images/paypal.png"
          selected={formData.tipoPagamentoSelected === 'PayPal'}
          onClick={handleClick}
        />
      </FormContentWrapper.InputGroup>

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
            value={formData.nome}
            width="318px"
            onChange={handleChange}
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
            value={formData.sobrenome}
            width="318px"
            onChange={handleChange}
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
            name="paisResidencia"
            value={formData.paisResidencia}
            width="318px"
            onChange={handleChange}
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
            name="dataNascimento"
            value={formData.dataNascimento}
            width="318px"
            onChange={handleChange}
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
            name="cpf"
            value={formData.cpf}
            width="318px"
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            width="318px"
            onChange={handleChange}
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
            name="telefone"
            value={formData.telefone}
            width="318px"
            onChange={handleChange}
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

$(document).ready(function(){
  //variáveis globais
  var doc = {
    nome:"NOME",
    nacionalidade:"NACIONALIDADE",
    rg: "RG",
    cpf:"CPF",
    nascimento:"NASCIMENTO",
    filiacao:"FILIAÇÃO"
  };

  //monta_texto
  function monta_texto(){
    var texto = "Certifico para os devidos fins, que em busca efetuda no sistema PROJUDI desta 3ª VARA DO SISTEMA DOS JUIZADOS ESPECIAIS DE ITABUNA, no âmbito criminal, em PROCESSOS ATIVOS, NADA CONSTA em nome de " + doc.nome + ", " + doc.nacionalidade + ", portador(a) do RG: " + doc.rg + ", CPF: " + doc.cpf + ", nascido(a) em " + doc.nascimento + ", filho(a) de " + doc.filiacao +".  O referido é verdade e dou fé."
    $("#teor").text(texto);
    assina();
  }

  //assinatura
  function assina(){
    $("#assinatura").html("<em>"+ "Alexandre Sousa Rodrigues" +" <br>Secretário</em>")
  }

  //muda nome
  $("#inp_nome").change(function(){
    doc.nome = $(this).val();
    monta_texto();
  });

  //muda nacionalidade
  $("#inp_nacionalidade").change(function(){
    doc.nacionalidade = $(this).val();
    monta_texto();
  });


  //muda rg
  $("#inp_rg").change(function(){
    doc.rg = $(this).val();
    monta_texto();
  });

  //muda cpf
  $("#inp_cpf").change(function(){
    doc.cpf = $(this).val();
    monta_texto();
  });

  //muda nascimento
  $("#inp_nascimento").change(function(){
    doc.nascimento = $(this).val();
    monta_texto();
  });

  //muda filiacao
  $("#inp_filiacao").change(function(){
    doc.filiacao = $(this).val();
    monta_texto();
  });


  //funcoes auxiliares

  //imprime documento
  $("#bt_imprimir").on("click", function(){window.print()});

  //aciona dropdow
  $(".dropdown-toggle").dropdown();

  monta_texto();
});

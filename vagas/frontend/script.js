const baseURL = 'http://localhost:3000'

const table = document.getElementById('tabela');

const getJobs = async() => {
  const response = await fetch(`${baseURL}/vagas`);
  const jobs = await response.json();

  jobs.map((vacancy) => {
    table.insertAdjacentHTML('beforeend', `
      <tr>
          <td>${vacancy.id}</td>
          <td>${vacancy.local}</td>
          <td>${vacancy.classification}</td>
          <td>${vacancy.type}</td>
          <td>${vacancy.salary}</td>
      </tr>    
    `)
  })
} 
getJobs();

const choose = async () => {
  const id = document.getElementById('vagaID').value;
  const response = await fetch(`${baseURL}/vagas/${id}`);
  const opportunity = await response.json();

  document.getElementById('vagaEscolhida').insertAdjacentHTML('beforeend', `
    <tr>
      <td>${opportunity.id}</td>
      <td>${opportunity.local}</td>
      <td>${opportunity.classification}</td>
      <td>${opportunity.type}</td>
      <td>R$ ${opportunity.salary}</td>
    </tr>
  `)

  document.getElementById('vagaID').value = '';
  
}
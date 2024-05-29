// API para localidade
document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    // Função para popular os estados
    const populateStates = () => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then(response => response.json())
            .then(states => {
                states.forEach(state => {
                    const option = document.createElement('option');
                    option.value = state.id;
                    option.textContent = state.nome;
                    stateSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Erro ao buscar estados:', error));
    };

    // Função para popular os municípios com base no estado selecionado
    const populateCities = (stateId) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
            .then(response => response.json())
            .then(cities => {
                citySelect.innerHTML = '<option value="">Selecione um município</option>';
                cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id;
                    option.textContent = city.nome;
                    citySelect.appendChild(option);
                });
            })
            .catch(error => console.error('Erro ao buscar municípios:', error));
    };

    // Evento de mudança no select de estado
    stateSelect.addEventListener('change', (event) => {
        const selectedStateId = event.target.value;
        citySelect.innerHTML = '<option value="">Selecione um município</option>';
        if (selectedStateId) {
            populateCities(selectedStateId);
        }
    });

    // Inicializa a população dos estados
    populateStates();
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const UJ = document.getElementById('UJ').value;
        const race = document.getElementById('race').value;
        const gender = document.getElementById('gender').value;
        const category = document.querySelector('input[name="category"]:checked').value === 'outros' ?
            document.getElementById('other-category').value :
            document.querySelector('input[name="category"]:checked').value;
        const bond = document.querySelector('input[name="bond"]:checked').value === 'outros' ?
            document.getElementById('other-bond').value :
            document.querySelector('input[name="bond"]:checked').value;
        const deficiency = document.querySelector('input[name="deficiency"]:checked').value === 'sim' ?
            document.getElementById('other-deficiency').value :
            document.querySelector('input[name="deficiency"]:checked').value;
        saveData(name, email, category, bond, UJ, gender, race, deficiency);
        });

    
        function saveData(name, email, category, bond, UJ, gender, race, deficiency) {
        console.log('Nome:', name); 
        console.log('Email:', email);
        console.log('Categoria:', category);
        console.log('Vínculo:', bond);
        console.log('UJ:', UJ);
        console.log('Gênero:', gender);
        console.log('Raça:', race);
        console.log('Deficiência:', deficiency);


        alert('Inscrição enviada com sucesso!');
        window.location.href = 'about.html';
        window.location.href = 'surver.html';
        window.location.href='motivation.html';
    };



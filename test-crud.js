const { Board, List, Card } = require('./models/index');
const sequelize = require('./db');

async function runTest() {
  try {
    console.log('--- Iniciando Pruebas CRUD ---');

    const proyecto = await Board.findOne({
      where: { title: 'Proyecto KanbanPro - Sprint 2' },
      include: {
        model: List,
        include: [Card] // Esto trae las listas y sus tarjetas
      }
    });

    console.log(`\n📋 Tablero encontrado: ${proyecto.title}`);
    proyecto.Lists.forEach(lista => {
      console.log(`  📍 Lista: ${lista.title}`);
      lista.Cards.forEach(tarjeta => {
        console.log(`    - Tarjeta: ${tarjeta.title} [Prioridad: ${tarjeta.priority}]`);
      });
    });

    const tarjetaAEditar = await Card.findOne({ where: { title: 'Definir Modelos' } });
    if (tarjetaAEditar) {
      tarjetaAEditar.priority = 'high';
      await tarjetaAEditar.save();
      console.log('\n✅ Prioridad actualizada a HIGH para: Definir Modelos');
    }

  } catch (error) {
    console.error('❌ Error en el test:', error);
  } finally {
    await sequelize.close();
  }
}

runTest();
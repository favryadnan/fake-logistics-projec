export default function Investments() {
  const projects = [
    { id: 1, name: "Investissement Arôme Lavande", pricePerShare: 100, availableShares: 50 },
    { id: 2, name: "Investissement Arôme Citron", pricePerShare: 80, availableShares: 30 },
    { id: 3, name: "Investissement Arôme Vanille", pricePerShare: 120, availableShares: 20 },
  ];

  return (
    <div>
      <h1>Investissez dans nos projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>Prix par action: {project.pricePerShare}€</p>
            <p>Actions disponibles: {project.availableShares}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

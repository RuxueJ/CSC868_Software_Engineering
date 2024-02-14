import { Person } from "./Gallery";

import { getImageUrl } from "./Gallery";

export default function Profile({
  person,
  imageSize = 70,
}: {
  person: Person;
  imageSize?: number;
}) {
  const imageSrc = getImageUrl({ person });

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function CardTestimonial({
  classes,
}) {
  return (
    <section className={`bg-black-d rounded-xl p-4 ${classes}`}>
      <p>This product has been a game-changer for me! The user-friendly interface and powerful features make it so easy to stay organized and productive. I’ve saved so much time and effort since I started using it.</p>
      <div className="flex items-start mt-3">
        <img
          src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/profile.png"
          alt="profile"
          className="w-8 rounded-full me-2"
        />
        <div>
          <p className="leading-none font-semibold">Maryam Noor</p>
          <small className="text-white-e">@normar</small>
        </div>
      </div>
    </section>
  );
}

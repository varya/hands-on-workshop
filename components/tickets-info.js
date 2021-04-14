import useSWR from "swr";

export default function TicketsInfo() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    "https://www.eventbriteapi.com/v3/events/150980283091/ticket_classes/?token=KM637KV4TCHEVHJ3NJD6",
    fetcher
  );

  if (error || !data) return "";

  const ticketData = data.ticket_classes;

  const tickets = {};
  ticketData.forEach((ticket) => {
    tickets[ticket.display_name] = ticket.quantity_total - ticket.quantity_sold;
  });

  const ticketAvailability = Object.entries(tickets)
    .map(([category, amount]) => `${amount} for ${category}`)
    .join(", ");

  return (
    tickets && (
      <p className="m-6 mx-6 text-sm text-center text-bold">
        <strong>Available tickets: </strong>
        {ticketAvailability}
      </p>
    )
  );
}

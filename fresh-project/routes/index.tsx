import { useSignal } from "@preact/signals";

export default function Home() {
	return (
		<div class="container max-w-4xl mx-auto px-4 py-8">
				<!-- The premise -->
				<div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
// TODO: Flash Island?
						// <% if flash.any? %>
						// <div id="flash-messages">
						// 		<% flash.each do |type, message| %>
						// 		<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 px-4 py-3 shadow-md mb-4 rounded-r" role="alert">
						// 				<div class="flex items-center justify-between">
						// 				<div>
						// 						<p class="font-bold"><%= type.to_s.capitalize %></p>
						// 						<p class="text-sm"><%= message %></p>
						// 				</div>
						// 				<button onclick="this.parentElement.parentElement.remove()" class="font-semibold">&times;</button>
						// 				</div>
						// 		</div>
						// 		<% end %>
						// </div>
						// <% end %>
						<div class="text-center max-w-2xl">
						<h1 class="text-2xl font-bold text-gray-800 mb-8">koffee</h1>

						// <%= image_tag 'coffee_landing_page.jpg', alt: 'Coffee Landing Page Image', class: 'w-full rounded-lg shadow-md mb-8', style: 'max-width: 600px; width: 100%; height: auto;' %>

						<div class="mb-8">
								<% if Reservation.where(day: Date::DAYNAMES[Time.zone.today.wday]).count <= 5 %>
								<%= link_to "I want koffee!", new_reservation_path, class: "font-nunito bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition duration-300 ease-in-out inline-block" %>
								<% else %>
								<h2 class="font-bold text-gray-800">Sorry. No more reservations for <%= Date::DAYNAMES[Time.zone.today.wday] %> :(</h2>
								<% end %>
						</div>
						</div>
				</div>

// TODO: Reservations Table component?
				<!-- Reservations table -->
				 <% if @reservations_exist %>
						<div class="bg-white shadow-md rounded-lg overflow-hidden mb-8">
						<table class="w-full">
								<thead class="bg-gray-100">
								<tr>
										<th class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
										<th class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Day</th>
										<th class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Actions</th>
								</tr>
								</thead>
								<tbody class="divide-y divide-gray-200">
								<% @reservations.each do |reservation| %>
										<tr class="hover:bg-gray-50">
										<td class="font-nunito px-6 py-4 whitespace-nowrap text-gray-700"><%= reservation.name.value %></td>
										<td class="font-nunito px-6 py-4 whitespace-nowrap text-gray-700"><%= reservation.day %></td>
										<td class="flex flex-row px-6 py-4 whitespace-nowrap font-medium">
												<%= link_to "View", reservation_path(reservation), class: "font-nunito bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out mr-4" %>
												<% if reservation.user_id == Current.user_id %>
														<%= button_to "Delete", reservation, method: :delete, data: { turbo: false }, class: "font-nunito bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out" %>
												<% end %>
										</td>
										</tr>
								<% end %>
								</tbody>
						</table>
						</div>
				<% end %>

				<!-- The Beans -->
				<div>
						<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">This weeks beans:</h2>
						<div class="flex flex-col justify-center">
						<section class="flex flex-row justify-between">
								<section class="flex flex-col">
								<p class="text-xl">Buncho</p>
								<p class="font-nunito">Ethiopian Landrace - Honey</p>
								<p class="font-nunito">Ethiopia</p>
								</section>
								<p class="text-xl">SEY</p>
						</section>

						<hr />
						<!-- content and image -->
						<section class="flex flex-row justify-end">
								<div class="flex flex-col">
								<p class="text-xl">Description</p>
								<p class="font-nunito">This selection comes from a site owned and operated by Asefa Dukamo, who has produced some of the best honey-processed coffees we have tasted in Ethiopia. In the cup we find watermelon, red tea, and orange zest.</p>
								</div>
						</section>

						<hr />

						<section class="flex flex-row justify-start">
								<div class="flex flex-col">
								<p class="text-xl">Price</p>
								<!-- TODO: Truck SVG Icon -->
								<p class="font-nunito">$13.76/KG</p>
								</div>
						</section>

						<hr />

						<section>
								<p class="text-xl">Pricing Details</p>
								<p class="font-nunito">The cost of getting a coffee from cherry to beverage varies enormously depending on its place of origin and the location of its consumption. The inclusion of price transparency is a starting point to inform broader conversation around the true costs of production and the sustainability of specialty coffee as a whole.<p>
						</section>

						<hr />

						<section class="flex flex-row justify-between">
								<section class="flex flex-col">
								<p class="text-xl">Varietal</p>
								<p class="font-nunito">Ethiopian Landrace</p>
								</section>
								<section class="flex flex-col">
								<p class="text-xl">Region</p>
								<p class="font-nunito">Bensa, Sidama</p>
								</section>
								<section class="flex flex-col">
								<p class="text-xl">Altitude</p>
								<p class="font-nunito">2,200 masl</p>
								</section>
								<section class="flex flex-col">
								<p class="text-xl">Harvest</p>
								<p class="font-nunito">January, 2024</p>
								</section>
						<section>
						</div>
				</div>

				<!-- koffee kups consumed -->
				<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
						<div class="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
						<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">koffee monsters</h2>

						<div class="overflow-x-auto">
								<table class="w-full">
								<thead class="bg-gray-100">
										<tr>
										<th class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Name</th>
										<th class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Total Cups</th>
										</tr>
								</thead>
								<tbody class="divide-y divide-gray-200">
	// TODO: Names Island to dynamically render the content
										<% @names.each_with_index do |name, index| %>
										<tr class="hover:bg-gray-50 <%= index.even? ? 'bg-white' : 'bg-gray-50' %>">
												<td class="font-nunito px-6 py-4 whitespace-nowrap font-medium text-gray-900"><%= name.value %></td>
												<td class="font-nunito px-6 py-4 whitespace-nowrap text-gray-700"><%= Reservation.where(name: name).count %></td>
										</tr>
										<% end %>
								</tbody>
								</table>
						</div>
						</div>
				</div>
		</div>
	)
}

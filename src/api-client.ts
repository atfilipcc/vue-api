import { Campaign, User, Client, CampaignType } from './types/types';

class ApiClient {
	private campaigns: Campaign[]
	private clients: Client[]
	private users: User[]
	private simulatedRequestTime = 1500

	constructor() {
		this.users = [
			{ id: 1, name: "Davina Gwendoline", email: "davina.gwendoline@publicisgroupe.com", password: "bfsbw53", image: "000002.jpg"},
			{ id: 2, name: "Jaylah Suz", email: "jaylah.suz@publicisgroupe.com", password: "th3tg3ht3", image: "000003.jpg" },
			{ id: 3, name: "Margie Jeremiah", email: "margie.jeremiah@publicisgroupe.com", password: "8jnjnvqaa5", image: "000005.jpg" },
			{ id: 4, name: "Lenard Nita", email: "lenard.nita@publicisgroupe.com", password: "6t4n64h75j43", image: "000001.jpg" },
			{ id: 5, name: "Leann Adamina", email: "leann.adamina@publicisgroupe.com", password: "asa533g3", image: "000006.jpg" },
			{ id: 6, name: "Abilene Bevis", email: "abilene.bevis@publicisgroupe.com", password: "l66kj5ggcxz", image: "000007.jpg" },
			{ id: 7, name: "Evonne Isadora", email: "evonne.isadora@publicisgroupe.com", password: "vdava3fe2", image: "000012.jpg" },
			{ id: 8, name: "Madeleine Anson", email: "madeleine.anson@publicisgroupe.com", password: "hnjnmszzsr43ww", image: "000009.jpg" },
			{ id: 9, name: "Jennifer Christy", email: "jennifer.christy@publicisgroupe.com", password: "53b4ehrwb35", image: "000004.jpg" },
		]

		this.clients = [
			{ id: 1, name: "Colist" },
			{ id: 2, name: "Abata" },
			{ id: 3, name: "Megacero" },
			{ id: 4, name: "Avijo" },
			{ id: 5, name: "Sugity" },
			{ id: 6, name: "Ocero" },
			{ id: 7, name: "Sufible" },
			{ id: 8, name: "Idiocee" },
			{ id: 9, name: "Supible" },
		]

		this.campaigns = [
			{
				id: 1,
				name: "Hotlax",
				campaignManager: this.users[0],
				client: this.clients[0],
				type: CampaignType.SEARCH_ENGINE,
				startDate: "2020-01-05",
				endDate: "2020-02-11",
				budget: 100000,
			},
			{
				id: 2,
				name: "Zathtex",
				campaignManager: this.users[1],
				client: this.clients[1],
				type: CampaignType.SEARCH_ENGINE,
				startDate: "2020-06-12",
				endDate: "2020-09-18",
				budget: 850000,
			},
			{
				id: 3,
				name: "Physex",
				campaignManager: this.users[2],
				client: this.clients[2],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-08-03",
				endDate: "2020-08-10",
				budget: 1170000,
			},
			{
				id: 4,
				name: "Triofind",
				campaignManager: this.users[3],
				client: this.clients[3],
				type: CampaignType.SEARCH_ENGINE,
				startDate: "2020-01-04",
				endDate: "2020-10-02",
				budget: 90000,
			},
			{
				id: 5,
				name: "San Ovedax",
				campaignManager: this.users[4],
				client: this.clients[4],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-02-04",
				endDate: "2020-04-02",
				budget: 510000,
			},
			{
				id: 6,
				name: "Villa Ronlab",
				campaignManager: this.users[5],
				client: this.clients[5],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-06-12",
				endDate: "2020-08-20",
				budget: 110000,
			},
			{
				id: 7,
				name: "Tip Light",
				campaignManager: this.users[6],
				client: this.clients[6],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-04-10",
				endDate: "2020-08-12",
				budget: 400000,
			},
			{
				id: 8,
				name: "Consailit",
				campaignManager: this.users[7],
				client: this.clients[7],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-01-10",
				endDate: "2020-10-12",
				budget: 850000,
			},
			{
				id: 9,
				name: "Zathmattex",
				campaignManager: this.users[8],
				client: this.clients[8],
				type: CampaignType.SOCIAL_MEDIA,
				startDate: "2020-07-10",
				endDate: "2020-07-15",
				budget: 150000,
			},
		]
	}

	public async requestCampaigns(): Promise<Campaign[]> {
		return this.delay(this.simulatedRequestTime).then(
			() => {
				return this.campaigns
			}
		)
	}

	public async requestUsers(): Promise<User[]> {
		return this.delay(this.simulatedRequestTime).then(
			() => {
				return this.users
			}
		)
	}

	public async requestClients(): Promise<Client[]> {
		return this.delay(this.simulatedRequestTime).then(
			() => {
				return this.clients
			}
		)
	}

	/**
	 * Returns user if match or else null
	 */
	public async login(email: string, password: string): Promise<User | null> {
		// TODO (Optional task): Implement
		return this.delay(this.simulatedRequestTime).then(
			() => {
				throw new Error("Not implemented")
			}
		)
	}

	private delay(ms: number): Promise<void> {
		return new Promise<void>(resolve => setTimeout(resolve, ms));
	}
}

export { CampaignType, Client, User, Campaign, ApiClient }

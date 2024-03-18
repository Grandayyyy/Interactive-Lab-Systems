import mongoose	from "mongoose";
import Room from "./models/Room.js";
import dotenv from "dotenv";

dotenv.config();

export default async function() {
	let rooms = await Room.find({});
	if(rooms.length === 0) {
		let room = new Room({
			name: "sample_room",
			displayName: "Sample Room",
			category: "Network test",
			shortDescription: "An sample room to test your OpenVPN connection.",
			images: [
				"ils/sample_room"
			],
			flags: [
				{name: "Website Flag", flag: "Flag{welcome_to_ILS!}"}
			],
			markdown: "This room is a sample room to show you how to use OpenVPN and connect to the internal network. Connect to the VPN network with your Ovpn creds, visit the room IP address to see the status of your connection!",
			successMsg: "You completed the sample room! Now, explore the other rooms and have fun!" // optional message
		});
		room.save();

		let room2 = new Room({
		    images: [
		        "ils/template_injection"
		    ],
		    name: "template_injection",
		    displayName: "Template Injection",
		    category: "SSTI",
		    shortDescription: "Improper Client Side Validation.",
		    flags: [
				{name: "Website Flag", flag: "Flag{Successfully_Performed_SERVER_SIDE_TEMPLATE_INJECTION}"}
			],
		    markdown: "This room has a Server Side Template Injection Vulnerability. You may visit [Hacktricks](https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection) for detailed information about the Vulnerability. In order to solve the lab you might need to perform some recon in beginning, how user input is taken care of. You might need to register an account first. **If the lab doesn't works on the given box IP address please visit Port 5000 with the IP address to access the lab.** "
		});
		room2.save();

		let room3 = new Room({
			name: "sql_injection_1",
			displayName: "SQL App",
			category: "SQL Injection",
			shortDescription: "SQLi",
			images: [
				"ils/sql_injection_1"
			],
			flags: [
				{name: "Website Flag", flag: "Flag{mysql_max_allowed_packet}"}
			],
			markdown: "This is a simple application that has an SQL injection vulnerability. This room requires you to dump the database and retrieve the flag in it. Check out some resources: [Link](https://book.hacktricks.xyz/pentesting-web/sql-injection). ",
		});
		room3.save();

		let room4 = new Room({
			name: "ssrf_1",
			displayName: "Orange",
			category: "SSRF",
			shortDescription: "Server Side Request Forgery",
			images: [
				"ils/ssrf_1"
			],
			flags: [
				{name: "Website Flag", flag: "Flag{Perl_Scripting_be_g00D}"}
			],
			markdown: "A introduction to SSRF vulnerability box. Exploit the SSRF and retrive the flag. Check out some resources: [Link](https://book.hacktricks.xyz/pentesting-web/ssrf-server-side-request-forgery) ",
		});
		room4.save();

		let room5 = new Room({
			name: "web_boxes",
			displayName: "Web Based",
			category: "Improper Acess Controls",
			shortDescription: "Authentication Bypass",
			images: [
				"ils/web_boxes"
			],
			flags: [],
			markdown: "The is a Web based application Authentication Bypass Challenges due to improper access controls. There are six different sub challenges in this category. This box has no flags, you may find Flag{example} as the output after solving individual challenges successfully.",
		});
		room5.save();
	}
}
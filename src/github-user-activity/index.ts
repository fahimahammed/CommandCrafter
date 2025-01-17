import https from 'https';
import { argv } from 'process';
import axios from 'axios'

const featchData = async (username: string): Promise<any> => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}/events`)
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

const displayData = async (events: any[]): Promise<void> => {
    if (!events.length) {
        console.log("No recent activity found.");
        return;
    }

    events.forEach((event) => {
        const repoName = event.repo.name;
        switch (event.type) {
            case 'PushEvent':
                console.log(`- Pushed ${event.payload.commits.length} commits to ${repoName}`);
                break;
            case 'CreateEvent':
                console.log(`- Created a ${event.payload.ref_type} in ${repoName}`);
                break;
            case 'PublicEvent':
                console.log(`- Made ${repoName} public.`);
                break;
            case 'PublicEvent':
                console.log(`- Made ${repoName} public.`);
                break;
            default:
                console.log(`- ${event.type} in ${repoName}`);
                break;
        }

    })
}

async function main(): Promise<void> {
    const username = argv[2];
    console.log("Username: ", username);
    const events = await featchData(username);
    await displayData(events);
}

main();
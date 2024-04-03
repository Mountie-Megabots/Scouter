'use client';

const host = "https://scouting.mountierobotics.org";

const scoutPiAPIKey = localStorage.getItem("token");


export async function MakeScoutPiRequest (apiData: string)
    {
        const response = await fetch(host + apiData, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
              "Content-Type": "application/json",
              "authorization": "Bearer " + scoutPiAPIKey
            }
        });

        return response.json();
    }

export async function MakeScoutPiPostRequest (apiData: string, body: string)
    {
        const response = await fetch(host + apiData, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
              "Content-Type": "application/json",
              "authorization": "Bearer " + scoutPiAPIKey
            },
            body: JSON.stringify(body),
        });

        return response.json();
    }
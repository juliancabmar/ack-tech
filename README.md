# Ack-Tech Store (e-commerce App)
## Overview:

This project simulates an online tech commerce site, giving us the capability of follow all the buy proccess... from navigate for all products, add we like to the cart and simulate a real payment thanks to Stripe.

![ack-tech](https://user-images.githubusercontent.com/85290842/195070652-bdae6057-a45a-4e00-a0f1-8cb2d0eaa28a.png)

## Run online:
https://ack-tech-store.vercel.app

## Project Description:
#### Frontend and Routing:
  I chose to use Next.js over a traditional React.app because it seemed easier to structure and also take advantage of its simplification in routing... And I also wanted to learn more about Next.js obviously ;) 
#### Database CRUD:
I found Sanity to be an excellent solution both as a data and multimedia server, and knowing Graph-ql queries previously, Sanity's GROQ (Graph-Relational Object Queries) became quite familiar to me.
#### Payment Simulation:
Other developers told me about Stripe, so I tried it and loved it... I really found it a very simple but complete solution to the problem of managing payments and shipping charges.
#### Deploy on Vercel:
I try various servers, but for Next.js apps this was my prefered.

## How install and run:
First clone the repo and cd on it:
```bash
$ git clone https://github.com/juliancabmar/ack-tech
$ cd ./ack-tech
```
Install the dependencies:
```bash
$ npm install --legacy-peer-deps #(for avoid dependency issues)
```
Run the app:
```bash
$ npm run dev
```
Finally open [http://localhost:3000](http://localhost:3000) in your browser.

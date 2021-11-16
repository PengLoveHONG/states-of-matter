<script lang="ts">
  import {onMount} from "svelte";
  import ChatWindow from "./ChatWindow.svelte";
  import Modals from "./modals/Modals.svelte";
  import Notifications from "./Notifications.svelte";
  import Auth from "./auth/Auth.svelte";
  import Client from "./client/Client.svelte";
  import Sidenav from "./sidenav/Sidenav.svelte";
  import Game from "./game/Game.svelte";
  import responses from "responses";
  import {socketService} from "services";
  import {playerStore, gameStore} from "stores/data";

  $: status = $playerStore.account.status;

  onMount(() => {
    socketService.listenToResponses(responses);

    // $gameStore = {
    //   "game_id": 794968922,
    //   "player_a": {
    //       "username": "krle",
    //       "hero": {
    //           "health": 1000,
    //           "damage": 30,
    //           "special": 10
    //       },
    //       "fields": {
    //           "minion_a": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_b": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_c": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_d": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_e": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "magic": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "trap": {
    //               "gid": 0,
    //               "id": 0
    //           }
    //       },
    //       "deck": [
    //           {
    //               "gid": 0,
    //               "id": 100
    //           },
    //           {
    //               "gid": 1,
    //               "id": 100
    //           },
    //           {
    //               "gid": 2,
    //               "id": 101
    //           },
    //           {
    //               "gid": 3,
    //               "id": 101
    //           },
    //           {
    //               "gid": 4,
    //               "id": 102
    //           },
    //           {
    //               "gid": 5,
    //               "id": 102
    //           },
    //           {
    //               "gid": 6,
    //               "id": 103
    //           },
    //           {
    //               "gid": 7,
    //               "id": 103
    //           },
    //           {
    //               "gid": 8,
    //               "id": 105
    //           },
    //           {
    //               "gid": 9,
    //               "id": 105
    //           },
    //           {
    //               "gid": 10,
    //               "id": 104
    //           },
    //           {
    //               "gid": 11,
    //               "id": 104
    //           },
    //           {
    //               "gid": 12,
    //               "id": 106
    //           },
    //           {
    //               "gid": 13,
    //               "id": 106
    //           },
    //           {
    //               "gid": 14,
    //               "id": 107
    //           },
    //           {
    //               "gid": 15,
    //               "id": 107
    //           },
    //           {
    //               "gid": 16,
    //               "id": 109
    //           },
    //           {
    //               "gid": 17,
    //               "id": 109
    //           },
    //           {
    //               "gid": 18,
    //               "id": 108
    //           },
    //           {
    //               "gid": 19,
    //               "id": 108
    //           },
    //           {
    //               "gid": 20,
    //               "id": 111
    //           },
    //           {
    //               "gid": 21,
    //               "id": 111
    //           },
    //           {
    //               "gid": 22,
    //               "id": 110
    //           },
    //           {
    //               "gid": 23,
    //               "id": 110
    //           },
    //           {
    //               "gid": 24,
    //               "id": 0
    //           }
    //       ],
    //       "hand": [
    //           {
    //               "gid": 25,
    //               "id": 0
    //           },
    //           {
    //               "gid": 26,
    //               "id": 1
    //           },
    //           {
    //               "gid": 27,
    //               "id": 1
    //           },
    //           {
    //               "gid": 28,
    //               "id": 3
    //           },
    //           {
    //               "gid": 29,
    //               "id": 3
    //           }
    //       ],
    //       "graveyard": []
    //   },
    //   "player_b": {
    //       "username": "milos",
    //       "hero": {
    //           "health": 1000,
    //           "damage": 30,
    //           "special": 10
    //       },
    //       "fields": {
    //           "minion_a": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_b": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_c": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_d": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "minion_e": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "magic": {
    //               "gid": 0,
    //               "id": 0
    //           },
    //           "trap": {
    //               "gid": 0,
    //               "id": 0
    //           }
    //       },
    //       "deck": [
    //           {
    //               "gid": 0,
    //               "id": 101
    //           },
    //           {
    //               "gid": 1,
    //               "id": 101
    //           },
    //           {
    //               "gid": 2,
    //               "id": 100
    //           },
    //           {
    //               "gid": 3,
    //               "id": 100
    //           },
    //           {
    //               "gid": 4,
    //               "id": 103
    //           },
    //           {
    //               "gid": 5,
    //               "id": 103
    //           },
    //           {
    //               "gid": 6,
    //               "id": 109
    //           },
    //           {
    //               "gid": 7,
    //               "id": 109
    //           },
    //           {
    //               "gid": 8,
    //               "id": 1
    //           },
    //           {
    //               "gid": 9,
    //               "id": 1
    //           },
    //           {
    //               "gid": 10,
    //               "id": 102
    //           },
    //           {
    //               "gid": 11,
    //               "id": 102
    //           },
    //           {
    //               "gid": 12,
    //               "id": 11
    //           },
    //           {
    //               "gid": 13,
    //               "id": 11
    //           },
    //           {
    //               "gid": 14,
    //               "id": 10
    //           },
    //           {
    //               "gid": 15,
    //               "id": 10
    //           },
    //           {
    //               "gid": 16,
    //               "id": 108
    //           },
    //           {
    //               "gid": 17,
    //               "id": 108
    //           },
    //           {
    //               "gid": 18,
    //               "id": 110
    //           },
    //           {
    //               "gid": 19,
    //               "id": 110
    //           },
    //           {
    //               "gid": 20,
    //               "id": 111
    //           },
    //           {
    //               "gid": 21,
    //               "id": 111
    //           },
    //           {
    //               "gid": 22,
    //               "id": 9
    //           },
    //           {
    //               "gid": 23,
    //               "id": 9
    //           },
    //           {
    //               "gid": 24,
    //               "id": 8
    //           }
    //       ],
    //       "hand": [
    //           {
    //               "gid": 25,
    //               "id": 8
    //           },
    //           {
    //               "gid": 26,
    //               "id": 4
    //           },
    //           {
    //               "gid": 27,
    //               "id": 4
    //           },
    //           {
    //               "gid": 28,
    //               "id": 5
    //           },
    //           {
    //               "gid": 29,
    //               "id": 5
    //           }
    //       ],
    //       "graveyard": []
    //   }
    // }
    // $playerStore = {
    //   "username": "krle",
    //   "public_key": "EOS5ZEZooEC4PeXNEaEj3CN2Yjub5eDdfdfrNhyEePRkxd8cZgXJp",
    //   "private_key": "5KYiNcQXFxj3etrFW7bSi9v6tCrpmKYqvtf5e93xVxo6PeoVzpt",
    //   "private_key_hash": "",
    //   "account": {
    //       "status": 4,
    //       "xp": 125,
    //       "lv": 1,
    //       "deck_id": 1,
    //       "avatar_id": 0,
    //       "lobby_id": 0,
    //       "game_id": 794968922
    //   },
    //   "decks": [
    //       {
    //           "id": 0,
    //           "name": "solidnewname",
    //           "klass": 1,
    //           "cards": [
    //               {
    //                   "id": 51,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 50,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 52,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 53,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 54,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 55,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 57,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 56,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 59,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 58,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 61,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 60,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 2,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 3,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 5,
    //                   "amount": 2
    //               }
    //           ]
    //       },
    //       {
    //           "id": 1,
    //           "name": "liquid",
    //           "klass": 2,
    //           "cards": [
    //               {
    //                   "id": 100,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 101,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 102,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 103,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 105,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 104,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 106,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 107,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 109,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 108,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 111,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 110,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 0,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 1,
    //                   "amount": 2
    //               },
    //               {
    //                   "id": 3,
    //                   "amount": 2
    //               }
    //           ]
    //       },
    //       {
    //           "id": 2,
    //           "name": "gas",
    //           "klass": 3,
    //           "cards": []
    //       },
    //       {
    //           "id": 3,
    //           "name": "plasma",
    //           "klass": 4,
    //           "cards": [
    //               {
    //                   "id": 201,
    //                   "amount": 2
    //               }
    //           ]
    //       }
    //   ],
    //   "social": {
    //       "friends": [
    //           "pera",
    //           "zivko",
    //           "milos"
    //       ],
    //       "requests": [],
    //       "blocked": []
    //   }
    // }

    // status = 4;
  });
</script>

<style>
  .game {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: rgb(var(--grey));
    color: white;
  }
  .game__content { width: calc(100% - 384px); }
  .game__sidenav { width: 384px; }
</style>

<div class="game">
  {#if status === 0}
    <Auth/>
  {:else}
    <main class="game__content">
      {#if status === 1 || status === 2 || status === 3}
        <Client/>
      {:else if status === 4}
        <Game/>
      {/if}
    </main>
    <aside class="game__sidenav">
      <Sidenav/>
    </aside>
  {/if}
  <ChatWindow/>
  <Notifications/>
  <Modals/>
</div>
const POKEMONS = {
    BISASAM: {
        id: 'BISASAM',
        name: 'Bisasam',
        type: ['Grass', 'Poison'],
        stats: {
            height: 0.7, // m
            weight: 6.9, // kg
            catchRate: 45
        },
        sprites: {
            // Bitte hier die korrekten Links einfügen
            move: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljfy9k-71eccaf1-1ff2-415b-b4cf-e0a76b26933c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NTU5N2YzZC1jYmIyLTRlYTQtYTIwMi0xMWQ1YWI5YWY5YTAvZGxqZnk5ay03MWVjY2FmMS0xZmYyLTQxNWItYjRjZi1lMGE3NmIyNjkzM2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1Vgnd9XsBHTBq-Ll98WXEF1StEhXo1IQLPcsBicYwOg', 
            front: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljfy9k-2de461ea-dc32-47ae-ad54-4bfed0a873db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NTU5N2YzZC1jYmIyLTRlYTQtYTIwMi0xMWQ1YWI5YWY5YTAvZGxqZnk5ay0yZGU0NjFlYS1kYzMyLTQ3YWUtYWQ1NC00YmZlZDBhODczZGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bVPfgppo1stTEBaujdcV8RGpI7hVwRvuHQvy2jp_gDU',
            moveShiny: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljfy9k-d7727b01-5047-49f1-92fe-3dfa11ee7ad1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NTU5N2YzZC1jYmIyLTRlYTQtYTIwMi0xMWQ1YWI5YWY5YTAvZGxqZnk5ay0kNzcyN2IwMS01MDQ3LTQ5ZjEtOTJmZS0zZGZhMTFlZTdhZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKaIevOMGxSStz1RgjrEJ3bispdRFKcWdrv6tQHzj-4',
            frontShiny: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljfy9k-d29a7f98-961a-4c14-8434-c176c3dc0b99.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NTU5N2YzZC1jYmIyLTRlYTQtYTIwMi0xMWQ1YWI5YWY5YTAvZGxqZnk5ay1kMjlhN2Y5OC05NjFhLTRjMTQtODQzNC1jMTc2YzNkYzBiOTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D9qmw6NsRmrLCe8p4ppOE1DugjXboZd3DtvCuWmNV2Y'
        },
        spawn: {
            biome: 'FOREST',
            chance: 0.02 // 2% Chance pro Tile im Forest
        }
    }
};

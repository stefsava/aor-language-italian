module.exports = {
    aor: {
        action: {
            delete: 'Cancella',
            show: 'Mostra',
            list: 'Elenco',
            save: 'Salva',
            create: 'Crea',
            edit: 'Modifica',
            cancel: 'Annulla',
            refresh: 'Aggiorna',
            add_filter: 'Aggiungi un filtro',
            remove_filter: 'Rimuovi questo filtro',
            back: 'Indietro',
        },
        boolean: {
            true: 'Si',
            false: 'No',
        },
        page: {
            list: 'Lista %{name}',
            edit: '%{name} %{id}',
            show: '%{name} %{id}',
            create: 'Aggiungi %{name}',
            delete: 'Elimina %{name} %{id}',
            dashboard: 'Cruscotto',
            not_found: 'Non trovato',
        },
        input: {
            file: {
                upload_several:
                    'Trascina i files da caricare, oppure clicca per selezionare.',
                upload_single: 'Trascina il file da caricare, oppure clicca per selezionarla.',
            },
            image: {
                upload_several:
                    'Trascina le immagini da caricare, oppure clicca per selezionarle.',
                upload_single:
                    'Trascina l\'immagine da caricare, oppure clicca per selezionarla.',
            },
        },
        message: {
            yes: 'Si',
            no: 'No',
            are_you_sure: 'Sei sicuro ?',
            about: 'Informazioni',
            not_found:
                'Hai inserito un URL errato, oppure hai cliccato un link errato',
        },
        navigation: {
            no_results: 'Nessun risultato trovato',
            page_out_of_boundaries: 'Il numero di pagina %{page} è fuori dei limiti',
            page_out_from_end: 'Fine della paginazione',
            page_out_from_begin: 'Il numero di pagina deve essere maggiore di 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} di %{total}',
            next: 'Successivo',
            prev: 'Precedente',
        },
        auth: {
            username: 'Nome utente',
            password: 'Password',
            sign_in: 'Login',
            sign_in_error: 'Autenticazione fallita, riprovare.',
            logout: 'Disconnessione',
        },
        notification: {
            updated: 'Record aggiornato',
            created: 'Record creato',
            deleted: 'Record eliminato',
            item_doesnt_exist: 'Record inesistente',
            http_error: 'Errore di comunicazione con il server dati',
        },
        validation: {
            required: 'Campo obbligatorio',
            minLength: 'Deve essere lungo %{min} caratteri almeno',
            maxLength: 'Deve essere lungo %{max} caratteri al massimo',
            minValue: 'Deve essere almeno %{min}',
            maxValue: 'Deve essere al massimo %{max}',
            number: 'Deve essere un numero',
            email: 'Deve essere un valido indirizzo email',
        },
    },
};

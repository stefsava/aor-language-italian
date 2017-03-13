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
        },
        boolean: {
            true: 'Si',
            false: 'No',
        },
        page: {
            list: 'Lista di %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Aggiungi %{name}',
            delete: 'Elimina %{name} #%{id}',
            dashboard: 'Cruscotto',
        },
        input: {
            image: {
                upload_several: 'Trascina i files da caricare, oppure clicca per selezionare.',
                upload_single: 'Trascina il file da caricare, oppure clicca per selezionare.',
            },
        },
        message: {
            yes: 'Si',
            no: 'No',
            are_you_sure: 'Sei sicuro ?',
            about: 'Informazioni',
        },
        navigation: {
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
            http_error: 'Errore di comunicazione con il server',
        },
        validation: {
            required: 'Campo obbligatorio',
        },
    },
};

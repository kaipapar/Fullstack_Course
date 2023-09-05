sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: selain lähettää palvelimelle uuden muistiinpanon JSON muodossa.
    activate server
    server-->>browser: 201 "note created"
    deactivate server
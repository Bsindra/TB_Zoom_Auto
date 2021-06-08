// Version 3 2018-05-07 by mabouvier. Added support for composite modes. & 2019-05-08 by efortier. Fixed dialog spacing to be consistent. 

function TB_Zoom_Vito()
{
    var d = new Dialog;
    d.title = "Preguiça de marcar um por um";
    d.width= 375;


        //----------------------Scale Independent Thickness---------------

    var gThickness= new GroupBox;
    gThickness.title="Scale Independent";
    d.add(gThickness);


    var ThicknessOff = new RadioButton;
    ThicknessOff.text = "Off";
    ThicknessOff.toolTip = "Checking this will set the value in the Adjust Pencil Thickness to Off.";
    ThicknessOff.checked = true;
    gThickness.add(ThicknessOff);

    gThickness.newColumn();

    var ThicknessDep = new RadioButton;
    ThicknessDep.text = "Dependent";
    ThicknessDep.toolTip = "Checking this will set the Scale Independent Thickness to Dependent in all the modules selected.";
    gThickness.add(ThicknessDep);

    gThickness.newColumn();

    var ThicknessIndep = new RadioButton;
    ThicknessIndep.text = "Independent";
    ThicknessIndep.toolTip = "Checking this will set the Scale Independent Thickness to Independent in all the modules selected.";
    gThickness.add(ThicknessIndep);

    gThickness.newColumn();

    var ThicknessLeg = new RadioButton;
    ThicknessLeg.text = "Legacy";
    ThicknessLeg.toolTip = "Checking this will set the Scale Independent Thickness to Independent(Legacy) in all the modules selected.";
    gThickness.add(ThicknessLeg);


    d.addSpace(20);

    //------functions-----------------------------------------
    var rc = d.exec();

    scene.beginUndoRedoAccum("Set modules active layers");

    //Zoom Independent Thickness
    if (rc)
    {if (ThicknessOff.checked){
        MessageLog.trace("Dependancy Off");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );
        node.setTextAttr( node_name, "adjustPencilThickness", 1, "N");
        }
    }
    else if (ThicknessDep.checked){
        MessageLog.trace("Thickness Dependent");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );
        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "NomeEsquisitoDaOpcao" );
        }
    }
    else if (ThicknessIndep.checked){
        MessageLog.trace("Thickness Independent");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );

        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "NomeEsquisitoDaOpcao" );
        }
    }
    else if (ThicknessLeg.checked){
        MessageLog.trace("Thickness Legacy");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );

        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "NomeEsquisitoDaOpcao" );
        }
    }
    }
    scene.endUndoRedoAccum();
}

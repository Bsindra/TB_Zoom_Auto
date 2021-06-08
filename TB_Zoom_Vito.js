// Version 1 2021-06-03 by Bsindra on github.

function TB_Zoom_Auto()
{
    var d = new Dialog;
    d.title = "Auto - Scale ";
    d.width= 375;
    
    //----------------------Zoom Independent Thickness---------------
    
    var gThickness= new GroupBox;
    gThickness.title="Zoom Independent Thickness";
    d.add(gThickness);

    var ThicknessOff = new RadioButton;
    ThicknessOff.text = "Off";
    ThicknessOff.toolTip = "Checking this will de-activate the Scale Independent in the module selected.";
    ThicknessOff.checked = true;
    gThickness.add(ThicknessOff);

    gThickness.newColumn();
    
    var ThicknessAsis = new RadioButton;
    ThicknessAsis.text = "As Is";
    ThicknessAsis.toolTip = "Checking this will leave the value in the selected module for Scale Independent as it is presently.";
    ThicknessAsis.checked = true;
    gThickness.add(ThicknessAsis);

    gThickness.newColumn();

    var ThicknessDep = new RadioButton;
    ThicknessDep.text = "Dependent";
    ThicknessDep.toolTip = "Checking this will change the value in the selected modules for Scale Independent to \"Dependent\"";
    ThicknessDep.checked = true;
    gThickness.add(ThicknessDep);

    gThickness.newColumn();

    var ThicknessIndep = new RadioButton;
    ThicknessIndep.text = "Independent";
    ThicknessIndep.toolTip = "Checking this will change the value in the selected modules for Scale Independent \"Independent\"";
    ThicknessIndep.checked = true;
    gThickness.add(ThicknessIndep);

    gThickness.newColumn();

    var ThicknessLeg = new RadioButton;
    ThicknessLeg.text = "Legacy";
    ThicknessLeg.toolTip = "Checking this will change the value in the selected modules for Scale Independent \"Independent (Legacy)\"";
    ThicknessLeg.checked = true;
    gThickness.add(ThicknessLeg);



    d.addSpace(20);

    //------functions-----------------------------------------
    var rc = d.exec();

    scene.beginUndoRedoAccum("Set modules active layers");

    //Zoom Independent Thickness
    if (rc)
    {if (ThicknessAsis.checked){
        MessageLog.trace("Zoom Independent Thickness");
    }
    else if (ThicknessDep.checked){
        MessageLog.trace("Thickness On");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );
        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "Scale Dependent" );
        }
    }
    else if (ThicknessIndep.checked){
        MessageLog.trace("Thickness On");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );
        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "Scale Independent" );
        }
    }
    else if (ThicknessLeg.checked){
        MessageLog.trace("Thickness On");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );
        node.setTextAttr( node_name, "adjustPencilThickness", 1, "Y");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "Scale Independent (Legacy)" );
        }
    }
    else if (ThicknessOff.checked){
        MessageLog.trace("Thickness Off");
        for (var sel_index = 0 ; sel_index < selection.numberOfNodesSelected(); sel_index++)
        {
        var node_name = selection.selectedNode( sel_index );

        node.setTextAttr( node_name, "adjustPencilThickness", 1, "N");
        node.setTextAttr( node_name, "zoomIndependentLineArtThickness", 1, "N" );
        }
    }
    }
    scene.endUndoRedoAccum();
}
